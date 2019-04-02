import React, { useState } from 'react'
import { UserContext } from './UserProvider'
import { Link } from 'react-router-dom'
import { signInWithGoogle, signIn, signUp } from './firebase'

const SignInAndSignUp = ({ setUser }) => {
    const [ newUser, setNewUser ] = useState(true)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ authErrorMessage, setAuthErrorMessage ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const handleUser = user => {
        setAuthErrorMessage('')
        setUser(user)
    }
    const handleAuthError = ({ message }) => setAuthErrorMessage(message)

    const handleAuth = authProvider => {
        setIsLoading(true)
        authProvider()
            .then(handleUser)
            .catch(handleAuthError)
            .finally(() => setIsLoading(false))
    }

    const genericAuth = (event, email, password) => {
        newUser
            ? handleAuth(() => signUp(email, password))
            : handleAuth(() => signIn(email, password))
        event.preventDefault()
    }

    return(
        <div>
            <button onClick={() => setNewUser(true)} disabled={newUser}>Sign Up</button>
            <button onClick={() => setNewUser(false)} disabled={!newUser}>Sign In</button>
            <form id="authForm">
                <p>{authErrorMessage}</p>
                <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
                <input type="submit" onClick={event => genericAuth(event, email, password)} value={isLoading ? 'Signing In...' : newUser ? 'Sign Up' : 'Sign In'} disabled={isLoading}/>
            </form>
            {!newUser && <Link to='/resetPassword'><button>Forgot Password?</button></Link>}
            <button onClick={() => handleAuth(signInWithGoogle)}>{`Sign ${newUser ? 'Up' : 'In'} with Google`}</button>
        </div>
    )
}

const UserInfo = ({ setUser, user: { user: { photoURL, displayName, email } } }) =>
    <div>
        <img alt="user thumbnail" src={photoURL} />
        {displayName && <p>Name: {displayName}</p>}
        <p>Email: {email}</p>
        <button onClick={() => setUser()}>Sign Out</button>
    </div>

const Authentication = () =>
    <UserContext.Consumer>
        {({ user, setUser }) =>
            user
                ? <UserInfo user={user} setUser={setUser} />
                : <SignInAndSignUp setUser={setUser}/>
        }
    </UserContext.Consumer>

export default Authentication