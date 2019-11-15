import React, { useState } from 'react'
import { UserContext } from '../provider/UserProvider'
import { Link, Redirect } from 'react-router-dom'
import { signInWithGoogle, signIn, signUp, signInWithFacebook, performanceMonitor, MAX_ATTRIBUTE_VALUE_LENGTH, analytics } from '../../firebase'
import Form from '../form'
import '../../styles/Login.css'
import { EmailField, PasswordField } from '../form/input'
import SocialAuthButton from '../authentication/SocialAuthButton'
import Navigation from '../navigation'
import { useLocation } from 'react-router-dom'
import { PATHS } from '../../utils/constants'
import { formatAuthErrorMessage } from '../../utils/errorMessages'

const SignInAndSignUp = ({ setUser, newUser }) => {
    const [ authErrorMessage, setAuthErrorMessage ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const authTrace = performanceMonitor.trace('auth')

    const handleUser = (user, type) => {
        authTrace.putAttribute('result', 'success')
        analytics.logEvent(type === 'emailSignUp' ? 'sign_up' : 'login', {
            method: type
        })
        setAuthErrorMessage('')
        setUser(user)
    }

    const handleAuthError = error => {
        authTrace.putAttribute('result', 'fail')
        const errorMessage = formatAuthErrorMessage(error)
        authTrace.putAttribute('errorMessage', errorMessage.slice(0, MAX_ATTRIBUTE_VALUE_LENGTH))
        setIsLoading(false)
        setAuthErrorMessage(errorMessage)
    }

    const handleAuth = (authProvider, type) => {
        authTrace.start()
        authTrace.putAttribute('type', type)
        setIsLoading(true)
        authProvider()
            .then(user => handleUser(user, type))
            .catch(handleAuthError)
            .finally(() => authTrace.stop())
    }

    const genericAuth = () => {
        authTrace.putAttribute('method', 'email')
        newUser
            ? handleAuth(() => signUp(email, password), 'emailSignUp')
            : handleAuth(() => signIn(email, password), 'emailSignIn')
    }

    return (
        <div className="Login page">
            <Navigation />
            <h2>{newUser? 'Sign Up' : 'Sign In'}</h2>
            <SocialAuthButton name="google" onClick={() => handleAuth(signInWithGoogle, 'google')} newUser={newUser} />
            <SocialAuthButton name="facebook" onClick={() => handleAuth(signInWithFacebook, 'facebook')} newUser={newUser} />
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
                    ? <span>Already have an account? <Link to={{pathname: PATHS.LOGIN, state: { newUser: false }}}>Sign In</Link></span>
                    : <>
                        <span>Don't have an account? <Link to={{pathname: PATHS.SIGN_UP, state: { newUser: true }}}>Sign Up</Link></span>
                        <Link to={PATHS.RESET_PASSWORD}>Forgot Your Password?</Link>
                      </>}
            </p>
        </div>
    )
}

const Login = ({ user }) => {
    const location = useLocation()

    return (
        <UserContext.Consumer>
            {({ setUser }) => {
                const pathOnSignIn = (location.state && location.state.pathOnSignIn) ? location.state.pathOnSignIn : PATHS.HOME
                return user
                    ? <Redirect to={pathOnSignIn} />
                    : (
                        <SignInAndSignUp
                            setUser={setUser}
                            newUser={location.state ? location.state.newUser : location.pathname === PATHS.SIGN_UP}
                            pathOnSignIn={location.state && pathOnSignIn ? pathOnSignIn : PATHS.HOME}
                        />
                    )
            }}
        </UserContext.Consumer>
)}

export default Login