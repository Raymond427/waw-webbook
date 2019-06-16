import React, { useState } from 'react'
import { TextField, SelectField, CheckboxField, RadioField, TextAreaField, RatingField } from '../form/Input'
import Form from '../form/Form'
import { UserContext } from '../UserProvider'

const Home = () => {
    // const [ showCheckOutForm, setShowCheckOutForm ] = useState(false)

    const [ radio, setRadio ] = useState()
    const [ checkBox, setCheckBox ] = useState()
    const [ select, setSelect ] = useState()
    const [ text, setText ] = useState()
    const [ textArea, setTextArea ] = useState()
    const [ rating, setRating ] = useState()

    const options = [
        { value: 'dog', text: 'Dog' },
        { value: 'cat', text: 'Cat' },
        { value: 'hamster', text: 'Hamster' },
        { value: 'parrot', text: 'Parrot' },
        { value: 'spider', text: 'Spider' },
        { value: 'goldfish', text: 'Goldfish' }
    ]

    const checkOptions = [
        { value: 'foo', text: 'Foo' },
        { value: 'bar', text: 'Bar' },
        { value: 'baz', text: 'Baz' }
    ]

    return (
        <UserContext.Consumer>
            {({ user }) =>
                <div>
                    {/* <button onClick={() => setShowCheckOutForm(!showCheckOutForm)}>{ showCheckOutForm ? 'Cancel Payment' : 'Buy Nothing: $5.00'}</button>
                    { showCheckOutForm && <Payment />} */}
                    <p>radio: {radio}</p>
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
                    </Form>
                </div>
            }
        </UserContext.Consumer>
    )
}

export default Home