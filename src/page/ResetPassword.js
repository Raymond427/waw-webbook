import React, { useState } from 'react'
import { resetPassword } from '../firebase'
import Form from '../form/Form'
import { EmailField } from '../form/Input'
import Navigation from '../Navigation'

const ResetPassword = () => {
        const [ email, setEmail ] = useState('')
        const [ passwordReset, setPasswordReset ] = useState(false)
        const [ submitionResults, setSubmissionResults ] = useState('')

        const handlePasswordReset = emailAddress => {
            resetPassword(emailAddress)
                .then(status => {
                    setSubmissionResults(status)
                    if (status === 200) { setPasswordReset(true) }
                }).catch(error =>
                    setSubmissionResults(error)
                )
        }

        return (
            <div className="ResetPassword page">
                <Navigation />
                {passwordReset
                ?   <p>Open the link we sent to {email} to reset your password</p>
                :   <>
                        <h2>Enter your email to reset your password</h2>
                        <Form submitValue='Reset Password' onSubmit={() => handlePasswordReset(email)}>
                            <EmailField valueHook={setEmail} />
                        </Form>
                    </>
                }
            </div>
        )
    }

export default ResetPassword