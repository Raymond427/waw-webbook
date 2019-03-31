import React, { useState } from 'react'
import './App.css'
import UserProvider from './UserProvider'
import Authentication from './Authentication'
import Payment from './Payment'

const App = () => {
    const [ showCheckOutForm, setShowCheckOutForm ] = useState(false)

    return (
    <div>
        <UserProvider>
            <Authentication />
            <button onClick={() => setShowCheckOutForm(!showCheckOutForm)}>{ showCheckOutForm ? 'Cancel Payment' : 'Buy Nothing: $5.00'}</button>
            { showCheckOutForm && <Payment />}
        </UserProvider>
    </div>)
}

export default App
