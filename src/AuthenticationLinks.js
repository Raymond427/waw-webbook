import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserProvider'
import './styles/AuthenticationLinks.css'
import Account from './icons/Account'

const SignInAndSignUpLinks = () =>
    <div className="AuthenticationLinks">
        <Link to={{pathname: '/login', state: { newUser: false }}}>Sign In</Link>
        <Link to={{pathname: '/sign-up', state: { newUser: true }}}>Sign Up</Link>
    </div>

const AccountLink = ({ user: { user: { photoURL } } }) =>
    <div className="account-link">
        <Link to='/account'>
            {photoURL ? <img className='account-icon account-profile' alt='account icon' src={photoURL} /> : <Account />}
        </Link>
    </div>

const AuthenticationLinks = () =>
    <UserContext.Consumer>
        {({ user }) =>
            user
                ? <AccountLink user={user} />
                : <SignInAndSignUpLinks />

        }
    </UserContext.Consumer>

export default AuthenticationLinks