import React from 'react'
import '../styles/App.css'
import UserProvider, { UserContext } from './provider/UserProvider'
import { Switch, Route } from 'react-router-dom'
import Home from './page/home'
import ResetPassword from './page/ResetPassword'
import Login from './page/Login'
import Account from './page/Account'
import Orders from './page/Orders'
import Feedback from './page/Feedback'
import Payment from './page/Payment'
import Chapter from './page/Chapter'
import ChapterRoute from './routing/ChapterRoute'
import ProtectedRoute from './routing/ProtectedRoute'
import UserManagementRoute from './routing/UserManagementRoute'
import ThemeProvider from './provider/ThemeProvider'

const App = () =>
    <div>
        <ThemeProvider>
            <UserProvider>
                <UserContext.Consumer>
                    {({ user }) =>
                        <Switch>
                            <Route exact path='/'>
                                <Home user={user} />
                            </Route>
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/sign-up' component={Login} />
                            <UserManagementRoute path='/usermgmt' />
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
                                user={user}
                                Component={Orders}
                            />
                            <ChapterRoute
                                path='/chapters/:chapterName'
                                Component={Chapter}
                                user={user}
                            />
                            <Route>
                                <Home user={user} />
                            </Route>
                        </Switch>
                    }
                </UserContext.Consumer>
            </UserProvider>
        </ThemeProvider>
    </div>

export default App
