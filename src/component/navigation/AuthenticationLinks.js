import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../provider/UserProvider'
import '../../styles/AuthenticationLinks.css'
import Account from '../icon/Account'

const SignInAndSignUpLinks = ({ onHomePage }) =>
    <div className="AuthenticationLinks">
        <Link to={{pathname: '/login', state: { newUser: false }}} style={{ color: onHomePage ? '#FFFFFF' : 'var(--primary-text-color)' }}>Sign In</Link>
        <Link to={{pathname: '/sign-up', state: { newUser: true }}} style={{ color: onHomePage ? '#FFFFFF' : 'var(--primary-text-color)' }}>Sign Up</Link>
    </div>

const AccountLink = ({ user: { user: { photoURL } }, history, onHomePage }) => {
    const [ showDefaultIcon, setShowDefaultIcon ] = useState(false)

    return (
        <button className="account-link" onClick={() => history.push('/account')}>
            {photoURL && !showDefaultIcon ? <img className='account-icon account-profile' alt='account icon' src={photoURL} onError={() => setShowDefaultIcon(true)} /> : <Account color={onHomePage ? '#FFFFFF' : 'var(--primary-text-color)'} />}
        </button>
    )
}

const AuthenticationLinks = ({ history }) => {
    const onHomePage = history.location.pathname === '/'

    return (
        <UserContext.Consumer>
            {({ user }) =>
                user
                    ? <AccountLink user={user} history={history} onHomePage={onHomePage} />
                    : <SignInAndSignUpLinks onHomePage={onHomePage} />
            }
        </UserContext.Consumer>
    )
}

export default AuthenticationLinks