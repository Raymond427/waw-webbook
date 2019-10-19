import React from 'react'
import { TextField, RatingField } from '../form/input'
import Form from '../form'
import Navigation from '../navigation'
import '../../styles/Feedback.css'

const Feedback = () =>
    <div className="Feedback page">
        <Navigation />
        <h2>Give Feedback</h2>
        <Form submitValue='Give Feedback' submittingValue="Submitting your feedback..." onSubmit={() => {}}>
            <RatingField id='rating' required errorMessage='Please provide a rating' valueHook={() => {}} />
            <TextField id='feedback' type='textarea' placeholder='Enter your thoughts' valueHook={() => {}} />
        </Form>
    </div>

export default Feedback