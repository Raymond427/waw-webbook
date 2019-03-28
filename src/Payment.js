import React from 'react'
import { CardElement, injectStripe, Elements, StripeProvider } from 'react-stripe-elements'

const STRIPE_API_KEY = 'pk_test_e7SFycDVuCMFeUwmn0bGr6iE00O4ZoyrYB'
const FIREBASE_CHARGE_CARD_FUNCTION_URL = 'https://us-central1-waw-webbook.cloudfunctions.net/charge'

const processPayment = async (event, stripe) => {
    stripe.createToken({ name: 'Name' })
        .then(({ token }) =>
            fetch(FIREBASE_CHARGE_CARD_FUNCTION_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
                body: token.id
            })
                .then(response => response.json().then(({ status }) => console.log(status)))
                .catch(() => console.log(`There was an error contacting our server!`))
        )
        .catch(() => console.log(`There was an error contacting Stripe!`))

    event.preventDefault()
}

const CardForm = ({ stripe }) =>
    <div className='checkout'>
        <CardElement />
        <button onClick={event => processPayment(event, stripe)}>Pay</button>
    </div>

const CheckoutForm = injectStripe(CardForm)

const Payment = () =>
    <StripeProvider apiKey={STRIPE_API_KEY}>
        <Elements>
            <CheckoutForm />
        </Elements>
    </StripeProvider>

export default Payment