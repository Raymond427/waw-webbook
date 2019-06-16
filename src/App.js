import React from 'react'
import './App.css'
import UserProvider from './UserProvider'
import { Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import ResetPassword from './page/ResetPassword'
import Login from './page/Login'
import Account from './page/Account'
import Orders from './page/Orders'
import Feedback from './page/Feedback'
import Navigation from './Navigation'

const App = () =>
    <div className='App'>
        <UserProvider>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/sign-up' component={Login} />
                <Route exact path='/resetPassword' component={ResetPassword} />
                <Route exact path='/account' component={Account} />
                <Route exact path='/orders' component={Orders} />
                <Route exact path='/feedback' component={Feedback} />
                <Route exact path='/reset-password' component={ResetPassword} />
            </Switch>
        </UserProvider>
    </div>

export default App
