import React from 'react'
import { TextField, RatingField } from '../form/Input'
import Form from '../form/Form'
import '../styles/Feedback.css'

const Feedback = () =>
    <div>
        <h2>Give Feedback</h2>
        <Form submitValue='Give Feedback'>
            <RatingField id='rating' errorMessage='Please provide a rating' valueHook={() => {}} />
            <TextField id='feedback' type='textarea' placeholder='Enter your thoughts' valueHook={() => {}} />
        </Form>
    </div>

export default Feedback