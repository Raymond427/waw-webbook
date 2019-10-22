import React, { useState, useEffect } from 'react'
import Order from '../Order'
import { TextField } from '../form/input'
import { injectStripe, Elements, StripeProvider, CardElement, PaymentRequestButtonElement } from 'react-stripe-elements'
import history from '../../history'
import Form from '../form'
import '../../styles/Payment.css'
import Navigation from '../navigation'
import { capitalize, totalPrice } from '../../utils'
import { postOrder } from '../../firebase'
import { PROCESSING_FEE_RATE } from '../../utils/constants'
import { ThemeContext } from '../provider/ThemeProvider'

const STRIPE_API_KEY = 'pk_test_e7SFycDVuCMFeUwmn0bGr6iE00O4ZoyrYB'
const FIREBASE_CHARGE_CARD_FUNCTION_URL = 'https://us-central1-waw-webbook.cloudfunctions.net/charge'

const PaymentRequest = ({ stripe, amount, postOrderPayload, setPaymentSuccessful, chapterName }) => {
    const [ canMakePayment, setCanMakePayment ] = useState(false)
    const [ paymentRequest, setPaymentRequest ] = useState(null)

    useEffect(() => {
        const paymentRequest = stripe.paymentRequest({
            currency: 'usd',
            country: 'US',
            total: {
                label: `Work After Work Profit Guide: ${chapterName}`,
                amount,
            },
            requestPayerName: true,
            requestPayerEmail: true,
        })

        paymentRequest.on('token', ({complete, token, ...data}) => {
            complete('success')
            postOrder(postOrderPayload)
            setPaymentSuccessful(true)
        })
        paymentRequest.canMakePayment().then(result => setCanMakePayment(result))

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

const CardForm = ({ user, stripe, chapter, PaymentRequestButton }) => {
    const [ paymentSuccessful, setPaymentSuccessful] = useState(false)
    const [ paymentResult, setPaymentResult ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ name, setName ] = useState('')
    const [ streetAddress, setStreetAddress ] = useState('')
    const [ streetAddress2, setStreetAddress2 ] = useState('')
    const [ zipCode, setZipCode ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')

    const capitalizedChapterName = capitalize(chapter.name)
    const charges = [
        { name: capitalizedChapterName, price: chapter.price },
        { name: 'Processing', price: chapter.price * PROCESSING_FEE_RATE }
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

    const postOrderPayload = {
        datePurchased: new Date().getTime(),
        userId: user.user.uid,
        productName: chapter.name,
        charges: {
            product: chapter.price,
            processing: chapter.price * PROCESSING_FEE_RATE
        },
        totalCost
    }

    const processPayment = () => {
        setIsLoading(true)
        stripe.createToken(cardData)
            .then(({ token }) =>
                fetch(FIREBASE_CHARGE_CARD_FUNCTION_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
                    body: token.id
                })
                    .then(response => response.json().then(({ status }) => {
                            if (status) {
                                postOrder(postOrderPayload)
                                setPaymentSuccessful(true)
                            } else {
                                setPaymentResult(status || 'Error processing payment, check the card info you entered and try again')
                            }
                        })
                    )
                    .catch(({ message }) => setPaymentResult(message || `There was an error contacting our server!`))
            )
            .catch(({ message }) => setPaymentResult(message || `There was an error contacting Stripe!`))
            .finally(() => setIsLoading(false))
    }

    return(
            <div>
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
                            <PaymentRequestButton cardData={cardData} amount={totalCost} postOrderPayload={postOrderPayload} setPaymentSuccessful={setPaymentSuccessful} chapterName={capitalizedChapterName}/>
                            <Form onSubmit={processPayment} submitting={isLoading} submitValue={'Buy'} submittingValue={'Processing...'} errorMessage={paymentResult} >
                                <TextField id='name' required errorMessage='Please provide your name as it appears on your card' placeholder='Name' valueHook={setName} />
                                <TextField id='street-address-1' required errorMessage='Please provide a valid street address' placeholder='Street Address' valueHook={setStreetAddress} />
                                <TextField id='street-address-2' errorMessage='Please provide a valid street address' placeholder='Street Address 2' valueHook={setStreetAddress2} />
                                <TextField id='zip-code' required errorMessage='Please provide a valid zip code' placeholder='Zipcode' valueHook={setZipCode} />
                                <TextField id='city' required errorMessage='Please provide a city' placeholder='City' valueHook={setCity} />
                                <TextField id='state' required errorMessage='Please provide a state' placeholder='State' valueHook={setState} />
                                <CardElement style={{base: { fontSize: '14px', color: '#FFFFFF', "::placeholder": { color: "#878787" } }}} />
                            </Form>
                        </>
                }
            </div>
    )
}

const CheckoutForm = injectStripe(CardForm)
const PaymentRequestButton = injectStripe(PaymentRequest)

const Payment = ({ user, chapters, computedMatch }) => {
    const [ stripe, setStripe ] = useState(null)
    const chapterName = computedMatch.params.productName
    const chapter = chapters.find(chapter => chapter.name === chapterName)

    useEffect(() => {
        window.Stripe
            ? setStripe(window.Stripe(STRIPE_API_KEY))
            : document.getElementById('stripe-js').addEventListener('load', () => setStripe(window.Stripe(STRIPE_API_KEY)))
    }, window.Stripe)

    return (
        <div className="Payment page">
            <Navigation />
            <StripeProvider stripe={stripe} apiKey={STRIPE_API_KEY}>
                <Elements>
                    <CheckoutForm user={user} chapter={chapter} PaymentRequestButton={PaymentRequestButton} />
                </Elements>
            </StripeProvider>
        </div>
    )
}

export default Payment