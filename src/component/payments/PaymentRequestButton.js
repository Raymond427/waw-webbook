import React, { useState, useEffect } from 'react'
import { PaymentRequestButtonElement } from 'react-stripe-elements'
import { ThemeContext } from '../provider/ThemeProvider'
import { chargeWithToken } from '../../utils/payments'
import { capitalize } from '../../utils'

const PaymentRequestButton = ({ stripe, user, chapter, processingFee, totalCost, setPaymentSuccessful, setPaymentResult }) => {
    const [ canMakePayment, setCanMakePayment ] = useState(false)
    const [ paymentRequest, setPaymentRequest ] = useState(null)

    useEffect(() => {
        const paymentRequest = stripe.paymentRequest({
            currency: 'usd',
            country: 'US',
            total: {
                label: `Work After Work Profit Guide: ${capitalize(chapter.name)}`,
                amount: totalCost,
            },
            requestPayerName: true,
            requestPayerEmail: true,
        })

        paymentRequest.canMakePayment().then(result => setCanMakePayment(result))

        paymentRequest.on('token', ({ token, complete }) => {
            chargeWithToken(token, chapter, user, totalCost, processingFee, setPaymentSuccessful, setPaymentResult)
                .then(({ successful }) => successful ? complete('success') : complete('fail'))

        })

        setPaymentRequest(paymentRequest)
    }, [])

    return (
        <ThemeContext.Consumer>
            {({ theme }) => (canMakePayment && paymentRequest) ? (
                    <>
                        <PaymentRequestButtonElement
                            paymentRequest={paymentRequest}
                            className="PaymentRequestButton"
                            style={{
                                paymentRequestButton: { theme },
                            }}
                        />
                        <p className="payment-request-button-divisor">OR</p>
                    </>
                ) : null
            }
        </ThemeContext.Consumer>
    )
}

export default PaymentRequestButton