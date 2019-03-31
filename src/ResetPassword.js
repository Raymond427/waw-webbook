import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { resetPassword } from './firebase'

const ResetPassword = () => {
        const [ email, setEmail ] = useState('')
        const [ submitionResults, setSubmissionResults ] = useState('')

        const handlePasswordReset = (event, emailAddress) => {
            resetPassword(emailAddress).then(status => setSubmissionResults(status)).catch(error => setSubmissionResults(error))
            event.preventDefault()
        }

        return (
            <>
                <Link to='/'>Back</Link>
                <form id="resetPassword">
                    {submitionResults && <span>{submitionResults}</span>}
                    <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <input type="submit" onClick={event => handlePasswordReset(event, email)} value="Reset Password"/>
                </form>
            </>
        )
    }

export default ResetPassword