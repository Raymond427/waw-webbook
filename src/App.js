import React from 'react'
import Home from './Home'
import './App.css'
import UserProvider from './UserProvider'
import { Switch, Route } from 'react-router-dom'
import ResetPassword from './ResetPassword'

const App = () =>
    <div>
        <UserProvider>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/resetPassword' component={ResetPassword}/>
            </Switch>
        </UserProvider>
    </div>

export default App
