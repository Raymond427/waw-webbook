import React, { useState } from 'react'
import { TextField, RatingField } from '../form/input'
import Form from '../form'
import Navigation from '../navigation'
import { postFeedback, performanceMonitor, MAX_ATTRIBUTE_VALUE_LENGTH } from '../../firebase'
import '../../styles/Feedback.css'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../utils/constants'
import { analytics } from '../../firebase'

const FeedBackForm = ({ user, setPosted }) => {
    const [ rating, setRating ] = useState(0)
    const [ comment, setComment ] = useState('')
    const [ isPosting, setIsPosting ] = useState(false)
    const [ postingError, setPostingError ] = useState('')

    const handlePost = () => {
        setIsPosting(true)
        const feedbackPostTrace = performanceMonitor.trace('submitFeedback')
        feedbackPostTrace.start()
        postFeedback({
            rating,
            comment,
            email: user.user.email,
            uid: user.user.uid
        }).then(() => {
            feedbackPostTrace.putAttribute('result', 'success')
            setPosted(true)
        }).catch(({ message }) => {
            feedbackPostTrace.putAttribute('errorMessage', message.slice(0, MAX_ATTRIBUTE_VALUE_LENGTH))
            feedbackPostTrace.putAttribute('result', 'fail')
            setPostingError(message)
        }).finally(() => {
            feedbackPostTrace.putAttribute('commentLength', `${comment.length}`)
            feedbackPostTrace.stop()
            analytics.logEvent('give_feedback', { rating: `${rating}` })
        })
    }

    return (
        <Form submitValue='Give Feedback' submittingValue="Submitting your feedback..." onSubmit={handlePost} submitting={isPosting} errorMessage={postingError}>
            <RatingField id='rating' required errorMessage='Please provide a rating' valueHook={setRating} />
            <TextField id='feedback' type='textarea' placeholder='Enter your thoughts' valueHook={setComment} />
        </Form>
    )
}

const Feedback = ({ user }) => {
    const [ posted, setPosted ] = useState(false)
    const history = useHistory()

    return (
        <div className="Feedback page">
            <Navigation />
            {posted
                ? (
                    <>
                        <h2>Thank you for your feedback!</h2>
                        <button className="button" onClick={event => {
                            event.preventDefault()
                            history.push(PATHS.HOME)
                        }}>Read a Chapter</button>
                    </>)
                : (
                    <>
                        <h2>Give Feedback</h2>
                        <FeedBackForm user={user} setPosted={setPosted} />
                    </>
                )}
        </div>
    )
}

export default Feedback