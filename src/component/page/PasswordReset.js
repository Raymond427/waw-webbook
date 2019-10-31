import React, { useState, useEffect } from 'react'
import { verifyPasswordResetCode, handlePasswordReset } from '../../firebase'
import Form from '../form'
import { PasswordField } from '../form/input'
import Navigation from '../navigation'
import { Redirect, withRouter } from 'react-router-dom'

const PasswordReset = withRouter(({ searchParams, history }) => {
    const [ verifyingActionCode, setVerifyingActionCode ] = useState(true)
    const [ email, setEmail ] = useState(false)
    const [ actionCodeVerified, setActionCodeVerified ] = useState(false)
    const [ passwordReset, setPasswordReset ] = useState(false)
    const [ submittonError, setSubmissionError ] = useState('')
    const [ isResettingPassword, setIsResettingPassword ] = useState(false)

    const actionCode = searchParams.get('oobCode')

    if (!actionCode) {
        return <Redirect to="/" />
    }

    useEffect(() => {
        const actionCodePromise = () => verifyPasswordResetCode(actionCode)
            .then(email => {
                setEmail(email)
                setActionCodeVerified(true)
            }).catch(() => {
                setActionCodeVerified(false)
            }).finally(() => setVerifyingActionCode(false))
        actionCodePromise()
    }, [])

    const resetPassword = (actionCode, newPassword) => {
        setIsResettingPassword(true)
        handlePasswordReset(actionCode, newPassword)
            .then(() => setPasswordReset(true))
            .catch(({ message }) => setSubmissionError(message))
            .finally(() => setIsResettingPassword(false))
    }

    const PageContents = () => {
        const [ newPassword, setNewPassword ] = useState('')

        if (verifyingActionCode) {
            return (
                    <h2>Verifying Password Reset Link...</h2>
            )
        }
        if (!actionCodeVerified) {
            return (
                <>
                    <h2>Looks like your password reset link has expired</h2>
                    <button
                        className="button"
                        onClick={event => {
                            event.preventDefault()
                            history.push('/reset-password')
                        }}
                    >
                        Get Another Link
                    </button>
                </>
            )
        } else {
            return passwordReset
            ?   (
                    <>
                        <h2>Your password has been reset!</h2>
                        <button
                            className="button"
                            onClick={event => {
                                event.preventDefault()
                                history.push('/login')
                            }}
                        >
                            Log In
                        </button>
                    </>
                )
            :   <>
                    <h2>Reset Password for {email}</h2>
                    <Form
                        submitValue="Reset Password"
                        onSubmit={() => resetPassword(actionCode, newPassword)}
                        submitting={isResettingPassword}
                        submittingValue="Resetting your password..."
                        errorMessage={submittonError}
                    >
                        <PasswordField valueHook={setNewPassword} />
                    </Form>
                </>
        }
    }

    return (
        <div className="PasswordReset page">
            <Navigation hideBack />
            <PageContents />
        </div>
    )
})

export default PasswordReset