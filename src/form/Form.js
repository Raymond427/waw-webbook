import React, { useState, useEffect, cloneElement, Children } from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({ id, onSubmit, submitValue = 'Submit', submittingValue, submitting = false, valid, setSubmissionAttempted }) => {
    const onClick = event => {
        valid ? onSubmit() : setSubmissionAttempted(true)
        event.preventDefault()
    }

    return (
        <input className='button form-submit' id={id ? `form-submit-${id}` : ''} type='submit' onClick={onClick} value={submitting ? submittingValue : submitValue} disabled={submitting}/>
    )
}

SubmitButton.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    submitValue: PropTypes.string.isRequired,
    submittingValue: PropTypes.string,
    submitting: PropTypes.bool,
    valid: PropTypes.bool.isRequired,
    setSubmissionAttempted: PropTypes.func.isRequired
}

const SubmissionErrorMessage = ({ errorMessage, id }) =>
    <div className='submission-error-message' id={id ? `submission-error-message-${id}` : ''}>
        <p className='submission-error-message__text' id={id ? `submission-error-message__text-${id}` : ''}>{errorMessage}</p>
    </div>

SubmissionErrorMessage.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    id: PropTypes.string
}

const Form = ({ children, onSubmit, submitValue = 'Submit', submittingValue, submitting = false, id = '', errorMessage }) => {
    const [ valid, setValidity ] = useState(true)
    const [ submissionAttempted, setSubmissionAttempted ] = useState(false)
    const [ invalidFields, setInvalidFeilds ] = useState([])

    useEffect(() => setValidity(invalidFields.length === 0), [ invalidFields ])

    const addToInValidFields = name => setInvalidFeilds(fields => [ ...fields, name ])
    const removeFromInValidFields = name => setInvalidFeilds(fields => fields.filter(fieldName => fieldName !== name))

    const inputs = Children.map(children, child => cloneElement(child, { submissionAttempted, addToInValidFields, removeFromInValidFields }))

    return(
        <form className='form' id={id}>
            {errorMessage && <SubmissionErrorMessage id={id} errorMessage={errorMessage} />}
            {inputs}
            <SubmitButton id={id} onSubmit={onSubmit} submitValue={submitValue} submitting={submitting} submittingValue={submittingValue} setSubmissionAttempted={setSubmissionAttempted} valid={valid} />
        </form>
    )
}

Form.propTypes = {
    id: PropTypes.string,
    children: PropTypes.any,
    onSubmit: PropTypes.func.isRequired,
    submitValue: PropTypes.string,
    submittingValue: PropTypes.string,
    submitting: PropTypes.bool,
    errorMessage: PropTypes.string
}

export default Form