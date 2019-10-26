import React from 'react'
import '../styles/App.css'
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
import UserChapterAndOrderProvider from './provider/UserChapterAndOrderProvider'

const App = () =>
    <div>
        <ThemeProvider>
            <UserChapterAndOrderProvider>
                {({ user, orders, chapters }) => (
                    <Switch>
                        <Route exact path='/'>
                            <Home chapters={chapters} />
                        </Route>
                        <Route exact path='/login'>
                            <Login user={user} />
                        </Route>
                        <Route exact path='/sign-up'>
                            <Login user={user} />
                        </Route>
                        <UserManagementRoute path='/usermgmt' />
                        <ProtectedRoute
                            path='/reset-password'
                            condition={!user}
                            Component={ResetPassword}
                        />
                        <ProtectedRoute
                            path='/account'
                            condition={user}
                            user={user}
                            Component={Account}
                        />
                        <ProtectedRoute
                            path='/buy/:productName'
                            condition={user}
                            user={user}
                            chapters={chapters}
                            Component={Payment}
                        />
                        <ProtectedRoute
                            path='/feedback'
                            condition={user}
                            user={user}
                            Component={Feedback}
                        />
                        <ProtectedRoute
                            path='/orders'
                            condition={user}
                            user={user}
                            orders={orders}
                            Component={Orders}
                        />
                        <ChapterRoute
                            path='/chapters/:chapterName'
                            Component={Chapter}
                            chapters={chapters}
                            user={user}
                        />
                    </Switch>
                )}
            </UserChapterAndOrderProvider>
        </ThemeProvider>
    </div>

export default App
