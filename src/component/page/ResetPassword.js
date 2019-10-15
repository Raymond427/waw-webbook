import React, { useState } from 'react'
import { sendPasswordResetEmail } from '../../firebase'
import Form from '../form'
import { EmailField } from '../form/input'
import Navigation from '../navigation'

const ResetPassword = () => {
        const [ email, setEmail ] = useState('')
        const [ passwordResetEmailSent, setPasswordResetEmailSent ] = useState(false)
        const [ submittonError, setSubmissionError ] = useState('')
        const [ isLoading, setIsLoading ] = useState(false)

        const handlePasswordReset = emailAddress => {
            setIsLoading(true)
            sendPasswordResetEmail(emailAddress)
                .then(() => setPasswordResetEmailSent(true))
                .catch(error => setSubmissionError(error))
                .finally(() => setIsLoading(false))
        }

        return (
            <div className="ResetPassword page">
                <Navigation />
                {passwordResetEmailSent
                ?   <h2>Open the link we sent to {email} to reset your password</h2>
                :   <>
                        <h2>Enter your email to reset your password</h2>
                        <Form
                            submitValue="Reset Password"
                            onSubmit={() => handlePasswordReset(email)}
                            submitting={isLoading}
                            submittingValue="Sending Your Reset Email..."
                            errorMessage={submittonError}
                        >
                            <EmailField valueHook={setEmail} />
                        </Form>
                    </>
                }
            </div>
        )
    }

export default ResetPassword