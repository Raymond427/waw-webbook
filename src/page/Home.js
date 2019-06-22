import React, { useState } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import { TextField, SelectField, CheckboxField, RadioField, TextAreaField, RatingField } from '../form/Input'
import Form from '../form/Form'
import { UserContext } from '../UserProvider'
import ChapterCarousel from '../ChapterCarousel'
import chapters from '../data/chapters.json'

const Home = () => {
    // const [ radio, setRadio ] = useState()
    // const [ checkBox, setCheckBox ] = useState()
    // const [ select, setSelect ] = useState()
    // const [ text, setText ] = useState()
    // const [ textArea, setTextArea ] = useState()
    // const [ rating, setRating ] = useState()

    // const options = [
    //     { value: 'dog', text: 'Dog' },
    //     { value: 'cat', text: 'Cat' },
    //     { value: 'hamster', text: 'Hamster' },
    //     { value: 'parrot', text: 'Parrot' },
    //     { value: 'spider', text: 'Spider' },
    //     { value: 'goldfish', text: 'Goldfish' }
    // ]

    // const checkOptions = [
    //     { value: 'foo', text: 'Foo' },
    //     { value: 'bar', text: 'Bar' },
    //     { value: 'baz', text: 'Baz' }
    // ]

    return (
        <UserContext.Consumer>
            {({ user }) =>
                <div>
                    {/* <button onClick={() => setShowCheckOutForm(!showCheckOutForm)}>{ showCheckOutForm ? 'Cancel Payment' : 'Buy Nothing: $5.00'}</button>
                    { showCheckOutForm && <Payment />} */}
                    {/* <p>radio: {radio}</p>
                    <p>checkBox: {checkBox}</p>
                    <p>select: {select}</p>
                    <p>text: {text}</p>
                    <p>textArea: {textArea}</p>
                    <p>rating: {rating}</p>
                    <Form onSubmit={() => console.log('Valid!')}>
                        <RatingField id='rate' errorMessage='Please provide a rating' labelText='RATE' valueHook={setRating} />
                        <RadioField labelText='Select a button' id='fooRadio' errorMessage='Please select a button' options={options} name='foo' valueHook={setRadio} />
                        <CheckboxField labelText='Check a box' id='fooCheck' required errorMessage='Please check a box' options={checkOptions} valueHook={setCheckBox} />
                        <SelectField labelText='Select Now' id='select' errorMessage='Please select an option' placeholder='Please select an option' options={options} valueHook={setSelect} />
                        <TextField labelText='TEXT FIELD' id='fooooo' errorMessage='WOMP WOMP' autoCompleteValues={[ '1', '2', '3', '4' ]} valueHook={setText} />
                        <TextAreaField labelText='TEXT Area FIELD' id='fooooo0' errorMessage='WOMP WOMP Area' autoCompleteValues={[ '4', '2', '3', '1' ]} valueHook={setTextArea} />                        
                    </Form> */}
                    {/* <Form submitValue='Pay $3.00'>
                        <TextField id='street-address-1' required errorMessage='Please provide a valid street address' placeholder='Street Address' valueHook={() => {}} />
                        <TextField id='street-address-2' required errorMessage='Please provide a valid street address' placeholder='Street Address Line 2' valueHook={() => {}} />
                        <TextField id='zip-code' required errorMessage='Please provide a valid zip code' placeholder='Zipcode' valueHook={() => {}} />
                        <TextField id='city' required errorMessage='Please provide a city' placeholder='City' valueHook={() => {}} />
                        <TextField id='state' required errorMessage='Please provide a state' placeholder='State' valueHook={() => {}} />
                        <TextField id='card-number' required errorMessage='Please provide a valid card number' placeholder='Card Number' valueHook={() => {}} />
                        <SelectField id='exp-month' required errorMessage='Please provide a valid expiration month' placeholder='Month' options={[]} valueHook={() => {}} />
                        <SelectField id='exp-year' required errorMessage='Please provide a valid expiration year' placeholder='Year' options={[]} valueHook={() => {}} />                        
                        <TextField id='cvc' required errorMessage='Please provide a cvc' placeholder='CVC' valueHook={() => {}} />
                    </Form> */}
                    <ChapterCarousel chapters={chapters} />
                </div>
            }
        </UserContext.Consumer>
    )
}

export default Home