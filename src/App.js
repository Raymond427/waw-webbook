import React from 'react'
import './App.css'
import UserProvider from './UserProvider'
import Authentication from './Authentication'

const App = () => {
    return (
    <div>
        <UserProvider>
            <Authentication />
        </UserProvider>
    </div>)
}

export default App
