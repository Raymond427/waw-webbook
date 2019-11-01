import React, { useState, useEffect } from 'react'
import { injectStripe, Elements, StripeProvider } from 'react-stripe-elements'
import '../../styles/Payment.css'
import Navigation from '../navigation'
import PaymentRequestButton from '../payments/PaymentRequestButton'
import CardForm from '../payments/CardForm'

const STRIPE_API_KEY = 'pk_test_e7SFycDVuCMFeUwmn0bGr6iE00O4ZoyrYB'

const CheckoutForm = injectStripe(CardForm)
const PaymentButton = injectStripe(PaymentRequestButton)

const Payment = ({ user, chapters, computedMatch }) => {
    const [ stripe, setStripe ] = useState(null)
    const chapterName = computedMatch.params.productName
    const chapter = chapters.find(chapter => chapter.name === chapterName)

    useEffect(() => {
        window.Stripe
            ? setStripe(window.Stripe(STRIPE_API_KEY))
            : document.getElementById('stripe-js').addEventListener('load', () => setStripe(window.Stripe(STRIPE_API_KEY)))
    }, [ window.Stripe ])

    return (
        <div className="Payment page">
            <Navigation />
            <StripeProvider stripe={stripe} apiKey={STRIPE_API_KEY}>
                <Elements>
                    <CheckoutForm user={user} chapter={chapter} PaymentButton={PaymentButton} />
                </Elements>
            </StripeProvider>
        </div>
    )
}

export default Payment