import React, { useState } from 'react'
import Order from '../Order'
import Form from '../form'
import { capitalize, totalPrice } from '../../utils'
import { PROCESSING_FEE_RATE, THEMES } from '../../utils/constants'
import { chargeWithToken } from '../../utils/payments'
import { TextField } from '../form/input'
import { CardElement } from 'react-stripe-elements'
import { useHistory } from 'react-router-dom'
import { formatPaymentErrorMessage } from '../../utils/errorMessages'
import { performanceMonitor } from '../../firebase'
import { ThemeContext } from '../provider/ThemeProvider'

const CardForm = ({ user, stripe, chapter, PaymentButton }) => {
    const [ paymentSuccessful, setPaymentSuccessful] = useState(false)
    const [ paymentResult, setPaymentResult ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ name, setName ] = useState('')
    const [ streetAddress, setStreetAddress ] = useState('')
    const [ streetAddress2, setStreetAddress2 ] = useState('')
    const [ zipCode, setZipCode ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')

    const history = useHistory()

    const capitalizedChapterName = capitalize(chapter.name)
    const processingFee = chapter.price * PROCESSING_FEE_RATE
    const charges = [
        { name: capitalizedChapterName, price: chapter.price },
        { name: 'Processing', price: processingFee }
    ]
    const totalCost = totalPrice(charges)

    const cardData = {
        name,
        address_line1: streetAddress,
        address_line2: streetAddress2,
        address_city: city,
        address_state: state,
        address_zip: zipCode,
        currency: 'usd'
    }

    const processPayment = () => {
        setIsLoading(true)
        const tokenCreationTrace = performanceMonitor.trace('tokenCreation')
        tokenCreationTrace.start()
        stripe.createToken(cardData)
            .then(({ token }) => {
                tokenCreationTrace.putAttribute('result', 'success')
                tokenCreationTrace.stop()
                chargeWithToken(token, chapter, user, totalCost, processingFee, setPaymentSuccessful, setPaymentResult, 'card')
            })
            .catch(error => {
                const errorMessage = formatPaymentErrorMessage(error)
                tokenCreationTrace.putAttribute('result', 'fail')
                tokenCreationTrace.putAttribute('errorMessage', errorMessage)
                tokenCreationTrace.stop()
                setPaymentResult(errorMessage)
            })
            .finally(setIsLoading(false))
    }

    return (
            <>
                {paymentSuccessful
                    ?   <>
                            <h2>Payment Successful!</h2>
                            <p>We’ve sent a reciept to {user.user.email}</p>
                            <Order productName={capitalizedChapterName} charges={charges} />
                            <button className="button" onClick={() => history.push(`/chapters/${chapter.name}`)}>Read Chapter</button>
                        </>
                    :   <>
                            <h2>Purchase {capitalizedChapterName}</h2>
                            <Order productName={capitalizedChapterName} charges={charges} />
                            <PaymentButton stripe={stripe} user={user} chapter={chapter} totalCost={totalCost} setPaymentResult={setPaymentResult} setPaymentSuccessful={setPaymentSuccessful} processingFee={processingFee} />
                            <Form onSubmit={processPayment} submitting={isLoading} submitValue={'Buy'} submittingValue={'Processing...'} errorMessage={paymentResult} >
                                <TextField id='name' required errorMessage='Please provide your name as it appears on your card' placeholder='Name' valueHook={setName} />
                                <TextField id='street-address-1' required errorMessage='Please provide a valid street address' placeholder='Street Address' valueHook={setStreetAddress} />
                                <TextField id='street-address-2' errorMessage='Please provide a valid street address' placeholder='Street Address 2' valueHook={setStreetAddress2} />
                                <TextField id='zip-code' required errorMessage='Please provide a valid zip code' placeholder='Zipcode' valueHook={setZipCode} />
                                <TextField id='city' required errorMessage='Please provide a city' placeholder='City' valueHook={setCity} />
                                <TextField id='state' required errorMessage='Please provide a state' placeholder='State' valueHook={setState} />
                                <ThemeContext.Consumer>
                                    {({ theme }) => (
                                        <CardElement style={{base: { fontSize: '14px', color: theme === THEMES.LIGHT ? '#121212' : '#FFFFFF', "::placeholder": { color: '#878787' } }}} />
                                    )}
                                </ThemeContext.Consumer>
                            </Form>
                        </>
                }
            </>
    )
}

export default CardForm