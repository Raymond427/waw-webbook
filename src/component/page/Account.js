import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { UserContext } from '../provider/UserProvider'
import Navigation from '../navigation'
import '../../styles/Account.css'

const Account = ({ user }) =>
    <UserContext.Consumer>
        {({ setUser}) =>
            <div className="Account page">
                <Navigation />
                <h1>Account</h1>
                <ul className="account-links">
                    {user && user.user && <li>{user.user.email}</li>}
                    <li id="account-link-log-out" onClick={() => setUser()}>
                        Log Out
                    </li>
                    <li>
                        <Link to='/orders'>Orders</Link>
                    </li>
                    <li>
                        <Link to='/feedback'>Give Feedback</Link>
                    </li>
                    <li>
                        <a href="mailto:admin@advancinginnovativeminds.org" target="_blank" rel="noopener noreferrer">
                            Contact Us
                        </a>
                    </li>
                </ul>
                {!user && <Redirect to='/' />}
            </div>
        }
    </UserContext.Consumer>

export default Account