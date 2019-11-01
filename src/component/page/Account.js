import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { UserContext } from '../provider/UserProvider'
import Navigation from '../navigation'
import '../../styles/Account.css'
import { PATHS } from '../../utils/constants'

const Account = ({ user }) => (
    <UserContext.Consumer>
        {({ setUser}) => (
            <div className="Account page">
                <Navigation />
                <h1>Account</h1>
                <ul className="account-links">
                    {user && user.user && <li>{user.user.email}</li>}
                    <li id="account-link-log-out" onClick={() => setUser()}>
                        Log Out
                    </li>
                    <li>
                        <Link to={PATHS.ORDERS}>Orders</Link>
                    </li>
                    <li>
                        <Link to={PATHS.FEEDBACK}>Give Feedback</Link>
                    </li>
                    <li>
                        <a href={PATHS.EMAIL_US} target="_blank" rel="noopener noreferrer">
                            Contact Us
                        </a>
                    </li>
                </ul>
                {!user && <Redirect to={PATHS.HOME} />}
            </div>
        )}
    </UserContext.Consumer>
)

export default Account