import React from 'react'
import { TextField, RatingField } from '../form/Input'
import Form from '../form/Form'

const Feedback = () =>
    <div>
        <h1>Give Feedback</h1>
        <Form submitValue='Give Feedback'>
            <RatingField id='rating' errorMessage='Please provide a rating' valueHook={() => {}} />
            <TextField type='textarea' placeholder='Enter your thoughts' />
        </Form>
    </div>

export default Feedback