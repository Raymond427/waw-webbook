import { capitalize } from '.'
import { postOrder, performanceMonitor } from '../firebase'
import { formatPaymentErrorMessage } from './errorMessages'

const FIREBASE_CHARGE_CARD_FUNCTION_URL = 'https://us-central1-waw-webbook.cloudfunctions.net/charge'

const postOrderPayload = (user, chapter, processingFee, totalCost) => ({
    datePurchased: new Date().getTime(),
    userId: user.user.uid,
    productName: chapter.name,
    charges: {
        product: chapter.price,
        processing: processingFee
    },
    totalCost
})

export const chargeWithToken = (token, chapter, user, totalCost, processingFee, setPaymentSuccessful, setPaymentResult, method) => {
    const chargeTrace = performanceMonitor.trace('charge')
    chargeTrace.start()
    chargeTrace.putAttribute('method', method)
    fetch(FIREBASE_CHARGE_CARD_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: chargePayload(user, chapter, totalCost, processingFee, token)
    })
        .then(response => response.json().then(response => {
                chargeTrace.putAttribute('result', 'other')
                chargeTrace.putAttribute('status', 'response.status')
                if (response.status === 'succeeded') {
                    chargeTrace.putAttribute('result', 'success')
                    postOrder(postOrderPayload(user, chapter, processingFee, totalCost))
                    setPaymentSuccessful(true)
                    return { successful: true }
                } else {
                    throw (response)
                }
            })
        )
        .catch(error => {
            chargeTrace.putAttribute('result', 'fail')
            setPaymentResult(formatPaymentErrorMessage(error))
            return { successful: false }
        })
        .finally(() => chargeTrace.stop())
}

export const chargePayload = (user, chapter, totalCost, processingFee, token) => JSON.stringify({
    amount: totalCost,
    currency: 'usd',
    description: `Work After Work Profit Guide: ${capitalize(chapter.name)}`,
    receipt_email: user.user.email,
    metadata: {
        price: chapter.price,
        processing_fee: processingFee
    },
    source: token.id
})
