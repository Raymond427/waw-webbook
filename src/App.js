import React from 'react'
import './App.css'
import UserProvider from './UserProvider'
import Authentication from './Authentication'
import Payment from './Payment'

const App = () => {
    return (
    <div>
        <UserProvider>
            <Authentication />
            <Payment />
        </UserProvider>
    </div>)
}

export default App
