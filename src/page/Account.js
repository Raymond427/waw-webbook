import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { UserContext } from '../UserProvider'

const Account = () =>
    <UserContext.Consumer>
        {({ user, setUser}) =>
            <div>
                <h1>Account</h1>
                <ul>
                    <li>{user && user.user.email}</li>
                    <li onClick={() => setUser()}>
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