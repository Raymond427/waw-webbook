import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserProvider'

const SignInAndSignUpLinks = () =>
    <div>
        <Link to={{pathname: '/login', state: { newUser: false }}}>Sign In</Link>
        <Link to={{pathname: '/sign-up', state: { newUser: true }}}>Sign Up</Link>
    </div>

const AccountLink = ({ user: { user: { photoURL, displayName, email } } }) =>
    <Link to='/account'>
        {photoURL ? <img className='account-icon' alt='account icon' src={photoURL} /> : 'Account'}
    </Link>

const AuthenticationLinks = () =>
    <UserContext.Consumer>
        {({ user }) =>
            user
                ? <AccountLink user={user} />
                : <SignInAndSignUpLinks />

        }
    </UserContext.Consumer>

export default AuthenticationLinks