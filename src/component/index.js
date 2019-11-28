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
import { PATHS } from '../utils/constants'
import OnlineProvider, { OnlineContext } from './provider/OnlineProvider'

const App = () => (
    <div>
        <ThemeProvider>
            <OnlineProvider>
                <OnlineContext.Consumer>
                    {({ online }) => (
                        <UserChapterAndOrderProvider>
                            {({ user, orders, chapters }) => (
                                <Switch>
                                    <Route exact path={PATHS.HOME}>
                                        <Home chapters={chapters} />
                                    </Route>
                                    <Route exact path={PATHS.LOGIN}>
                                        <Login user={user} />
                                    </Route>
                                    <Route exact path={PATHS.SIGN_UP}>
                                        <Login user={user} />
                                    </Route>
                                    <UserManagementRoute path={PATHS.USER_MANAGEMENT} />
                                    <ProtectedRoute
                                        path={PATHS.RESET_PASSWORD}
                                        condition={!user}
                                        Component={ResetPassword}
                                    />
                                    <ProtectedRoute
                                        path={PATHS.ACCOUNT}
                                        condition={user}
                                        user={user}
                                        Component={Account}
                                    />
                                    <ProtectedRoute
                                        path={`${PATHS.BUY}/:productName`}
                                        condition={user}
                                        user={user}
                                        chapters={chapters}
                                        Component={Payment}
                                    />
                                    <ProtectedRoute
                                        path={PATHS.FEEDBACK}
                                        condition={user}
                                        user={user}
                                        Component={Feedback}
                                    />
                                    <ProtectedRoute
                                        path={PATHS.ORDERS}
                                        condition={user}
                                        user={user}
                                        orders={orders}
                                        Component={Orders}
                                    />
                                    <ChapterRoute
                                        path={`${PATHS.CHAPTERS}/:chapterName`}
                                        Component={Chapter}
                                        chapters={chapters}
                                        user={user}
                                    />
                                </Switch>
                            )}
                        </UserChapterAndOrderProvider>
                    )}
                </OnlineContext.Consumer>
            </OnlineProvider>
        </ThemeProvider>
    </div>
)

export default App
