import React from 'react'
import { TextField, RatingField } from '../form/Input'
import Form from '../form/Form'
import Navigation from '../Navigation'
import '../styles/Feedback.css'

const Feedback = () =>
    <div className="Feedback page">
        <Navigation />
        <h2>Give Feedback</h2>
        <Form submitValue='Give Feedback'>
            <RatingField id='rating' required errorMessage='Please provide a rating' valueHook={() => {}} />
            <TextField id='feedback' type='textarea' placeholder='Enter your thoughts' valueHook={() => {}} />
        </Form>
    </div>

export default Feedback