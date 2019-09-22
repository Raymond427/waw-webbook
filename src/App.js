import React from 'react'
import './App.css'
import UserProvider, { UserContext } from './UserProvider'
import { Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import ResetPassword from './page/ResetPassword'
import Login from './page/Login'
import Account from './page/Account'
import Orders from './page/Orders'
import Feedback from './page/Feedback'
import Payment from './page/Payment'
import Chapter from './page/Chapter'
import ChapterRoute from './ChapterRoute'
import ProtectedRoute from './ProtectedRoute'

const App = () =>
    <div className='App'>
        <UserProvider>
            <UserContext.Consumer>
                {({ user }) =>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <ProtectedRoute
                            path='/login'
                            condition={!user}
                            Component={Login}
                        />
                        <ProtectedRoute
                            path='/sign-up'
                            condition={!user}
                            Component={Login}
                        />
                        <ProtectedRoute
                            path='/reset-password'
                            condition={!user}
                            Component={ResetPassword}
                        />
                        <ProtectedRoute
                            path='/account'
                            condition={user}
                            Component={Account}
                        />
                        <ProtectedRoute
                            path='/buy/:productName'
                            condition={user}
                            Component={Payment}
                        />
                        <ProtectedRoute
                            path='/feedback'
                            condition={user}
                            Component={Feedback}
                        />
                        <ProtectedRoute
                            path='/orders'
                            condition={user}
                            Component={Orders}
                        />
                        <ChapterRoute
                            path='/chapters/:chapterName'
                            Component={Chapter}
                            user={user}
                        />
                        <Route component={Home} />
                    </Switch>
                }
            </UserContext.Consumer>
        </UserProvider>
    </div>

export default App
