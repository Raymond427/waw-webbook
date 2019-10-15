import React, { useState } from 'react'
import { UserContext } from '../authentication/UserProvider'
import { Link, Redirect } from 'react-router-dom'
import { signInWithGoogle, signIn, signUp, signInWithFacebook } from '../../firebase'
import Form from '../form'
import '../../styles/Login.css'
import { EmailField, PasswordField } from '../form/input'
import SocialAuthButton from '../authentication/SocialAuthButton'
import Navigation from '../navigation'

const convertFaceBookUserObject = ({ photoURL, email }) => ({
    user: {
        photoURL,
        email
    }
})

const SignInAndSignUp = ({ setUser, newUser, pathOnSignIn }) => {
    const [ authErrorMessage, setAuthErrorMessage ] = useState('')
    const [ userSignedIn, setuserSignedIn ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleUser = (user, isFaceBook = false) => {
        setAuthErrorMessage('')
        setUser(isFaceBook ? convertFaceBookUserObject(user) : user)
        setuserSignedIn(true)
    }

    const handleAuthError = ({ message }) => setAuthErrorMessage(message)

    const handleAuth = (authProvider, isFaceBook = false) => {
        setIsLoading(true)
        authProvider()
            .then(user => handleUser(user, isFaceBook))
            .catch(handleAuthError)
            .finally(() => setIsLoading(false))
    }

    const genericAuth = () => {
        newUser
            ? handleAuth(() => signUp(email, password))
            : handleAuth(() => signIn(email, password))
    }

    return (
        <div className="Login page">
            <Navigation />
            <h2>{newUser? 'Sign Up' : 'Sign In'}</h2>
            <SocialAuthButton name="google" onClick={() => handleAuth(signInWithGoogle)} newUser={newUser} />
            <SocialAuthButton name="facebook" onClick={() => handleAuth(signInWithFacebook, true)} newUser={newUser} />
            <Form
                onSubmit={genericAuth}
                submitValue={newUser ? 'Sign Up' : 'Sign In'}
                submittingValue={'Signing In...'}
                submitting={isLoading}
                errorMessage={authErrorMessage}
            >
                <EmailField valueHook={setEmail} />
                <PasswordField valueHook={setPassword} />
            </Form>
            <p className='login-links'>
                {newUser
                    ? <span>Already have an account? <Link to={{pathname: '/login', state: { newUser: false }}}>Sign In</Link></span>
                    : <>
                        <span>Don't have an account? <Link to={{pathname: '/sign-up', state: { newUser: true }}}>Sign Up</Link></span>
                        <Link to='/resetPassword'>Forgot Your Password?</Link>
                      </>}
            </p>
            {userSignedIn && <Redirect to={pathOnSignIn} />}
        </div>
    )
}

const Login = ({ location }) => {
    return (
        <UserContext.Consumer>
            {({ setUser }) =>
                <SignInAndSignUp
                    setUser={setUser}
                    newUser={location.state ? location.state.newUser : location.pathname === '/sign-up'}
                    pathOnSignIn={location.state && location.state.pathOnSignIn ? location.state.pathOnSignIn : '/'}
            />}
        </UserContext.Consumer>
    )
}

export default Login