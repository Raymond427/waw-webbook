import React, { useState, useEffect } from 'react'
import Order from '../Order'
import { TextField, SelectField } from '../form/Input'
import { injectStripe, Elements, StripeProvider, CardElement } from 'react-stripe-elements'
import history from '../history'
import Form from '../form/Form'
import '../styles/Payment.css'
import { UserContext } from '../UserProvider'
import chapters from '../data/chapters.json'
import Navigation from '../Navigation'
import { capitalize, totalPrice } from '../utils'
import { STATES } from '../utils/constants'

const STRIPE_API_KEY = 'pk_test_e7SFycDVuCMFeUwmn0bGr6iE00O4ZoyrYB'
const FIREBASE_CHARGE_CARD_FUNCTION_URL = 'https://us-central1-waw-webbook.cloudfunctions.net/charge'

const CardForm = ({ user, stripe, chapter, pathOnPurchase }) => {
    const [ paymentSuccessful, setPaymentSuccessful] = useState(false)
    const [ paymentResult, setPaymentResult ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ name, setName ] = useState('')
    const [ streetAddress, setStreetAddress ] = useState('')
    const [ streetAddress2, setStreetAddress2 ] = useState('')
    const [ zipCode, setZipCode ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')

    const processPayment = () => {
        setIsLoading(true)
        const cardData = {
            name,
            address_line1: streetAddress,
            address_line2: streetAddress2,
            address_city: city,
            address_state: state,
            address_zip: zipCode,
            currency: 'usd'
        }
        stripe.createToken(cardData)
            .then(({ token }) =>
                fetch(FIREBASE_CHARGE_CARD_FUNCTION_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
                    body: token.id
                })
                    .then(response => response.json().then(({ status }) => status ? setPaymentSuccessful(true) : setPaymentResult(status || 'Error processing payment')))
                    .catch(() => setPaymentResult(`There was an error contacting our server!`))
            )
            .catch(() => setPaymentResult(`There was an error contacting Stripe!`))
            .finally(() => setIsLoading(false))
    }

    const chapterName = capitalize(chapter.name)
    const purchaseItems = [
        { name: chapterName, price: chapter.price },
        { name: 'Processing', price: chapter.price * 0.3 }
    ]
    const price = totalPrice(purchaseItems)

    return(
            <div>
                {paymentSuccessful
                    ?   <>
                            <h2>Payment Successful!</h2>
                            <p>We’ve sent a reciept to {user.user.email}</p>
                            <Order productName={chapterName} items={purchaseItems} />
                            <button onClick={() => history.push(pathOnPurchase)}>Read Chapter</button>
                        </>
                    :   <>
                            <h2>Purchase {chapterName}</h2>
                            <Order productName={chapterName} items={purchaseItems} />
                            <Form onSubmit={processPayment} submitting={isLoading} submitValue={'Buy'} submittingValue={'Processing...'} errorMessage={paymentResult} >
                                <TextField id='name' required errorMessage='Please provide your name as it appears on your card' placeholder='Name' valueHook={setName} />
                                <TextField id='street-address-1' required errorMessage='Please provide a valid street address' placeholder='Street Address' valueHook={setStreetAddress} />
                                <TextField id='street-address-2' errorMessage='Please provide a valid street address' placeholder='Street Address Line 2' valueHook={setStreetAddress2} />
                                <TextField id='zip-code' required errorMessage='Please provide a valid zip code' placeholder='Zipcode' valueHook={setZipCode} />
                                <TextField id='city' required errorMessage='Please provide a city' placeholder='City' valueHook={setCity} />
                                <TextField id='state' required errorMessage='Please provide a state' placeholder='State' valueHook={setState} />
                                <CardElement style={{base: { fontSize: '14px', color: '#FFFFFF', padding: '10px' }}} />
                            </Form>
                        </>
                }
            </div>
    )
}

const CheckoutForm = injectStripe(CardForm)

const Payment = ({ computedMatch, location }) => {
    const [ stripe, setStripe ] = useState(null)
    const chapterName = computedMatch.params.productName
    const chapter = chapters.find(chapter => chapter.name === chapterName)
    const pathOnPurchase = location.state.pathOnPurchase ? location.state.pathOnPurchase : '/'

    useEffect(() => {
        window.Stripe
            ? setStripe(window.Stripe(STRIPE_API_KEY))
            : document.getElementById('stripe-js').addEventListener('load', () => setStripe(window.Stripe(STRIPE_API_KEY)))
    }, window.Stripe)

    return (
        <div className="Payment page">
            <Navigation hideBack />
            <UserContext.Consumer>
                {({ user }) =>
                    <StripeProvider stripe={stripe} apiKey={STRIPE_API_KEY}>
                        <Elements>
                            <CheckoutForm user={user} chapter={chapter} pathOnPurchase={pathOnPurchase} />
                        </Elements>
                    </StripeProvider>
                }
            </UserContext.Consumer>
        </div>
    )
}

export default Payment