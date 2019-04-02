import React, { useState, useEffect } from 'react'
import { CardElement, injectStripe, Elements, StripeProvider } from 'react-stripe-elements'

const STRIPE_API_KEY = 'pk_test_e7SFycDVuCMFeUwmn0bGr6iE00O4ZoyrYB'
const FIREBASE_CHARGE_CARD_FUNCTION_URL = 'https://us-central1-waw-webbook.cloudfunctions.net/charge'

const processPayment = (event, stripe, setIsLoading, setPaymentResult) => {
    setIsLoading(true)
    stripe.createToken({ name: 'CARDHOLDER_NAME_HERE' })
        .then(({ token }) =>
            fetch(FIREBASE_CHARGE_CARD_FUNCTION_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
                body: token.id
            })
                .then(response => response.json().then(({ status }) => setPaymentResult(status || 'Error processing payment')))
                .catch(() => setPaymentResult(`There was an error contacting our server!`))
                .finally(() => setIsLoading(false))
        )
        .catch(() => {
            setIsLoading(false)
            setPaymentResult(`There was an error contacting Stripe!`)
        })
    event.preventDefault()
}

const CardForm = ({ stripe }) => {
    const [ paymentResult, setPaymentResult ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    return(
        <div>
            {paymentResult && <p>{paymentResult}</p>}
            <CardElement />
            <button onClick={event => processPayment(event, stripe, setIsLoading, setPaymentResult)} disabled={isLoading}>{isLoading ? 'Processing...' : 'Pay $5.00'}</button>
        </div>
    )
}

const CheckoutForm = injectStripe(CardForm)

const Payment = () => {
    const [ stripe, setStripe ] = useState(null)

    useEffect(() => {
        window.Stripe
            ? setStripe(window.Stripe(STRIPE_API_KEY))
            : document.querySelector('#stripe-js').addEventListener('load', () => setStripe(window.Stripe(STRIPE_API_KEY)))
    }, window.Stripe)

    return (
        <StripeProvider stripe={stripe} apiKey={STRIPE_API_KEY}>
            <Elements>
                <CheckoutForm />
            </Elements>
        </StripeProvider>
    )
}

export default Payment