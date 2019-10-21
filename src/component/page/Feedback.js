import React, { useState } from 'react'
import { TextField, RatingField } from '../form/input'
import Form from '../form'
import Navigation from '../navigation'
import { postFeedback } from '../../firebase'
import '../../styles/Feedback.css'
import { UserContext } from '../provider/UserProvider'
import { useHistory } from 'react-router-dom'

const FeedBackForm = ({ user, setPosted }) => {
    const [ rating, setRating ] = useState(0)
    const [ comment, setComment ] = useState('')
    const [ isPosting, setIsPosting ] = useState(false)
    const [ postingError, setPostingError ] = useState('')

    const handlePost = () => {
        setIsPosting(true)
        postFeedback({
            rating,
            comment,
            email: user.user.email,
            uid: user.user.uid
        }).then(() => {
            setPosted(true)
        }).catch(error => {
            setPostingError(error.message)
        })
    }

    return (
        <Form submitValue='Give Feedback' submittingValue="Submitting your feedback..." onSubmit={handlePost} submitting={isPosting} errorMessage={postingError}>
            <RatingField id='rating' required errorMessage='Please provide a rating' valueHook={setRating} />
            <TextField id='feedback' type='textarea' placeholder='Enter your thoughts' valueHook={setComment} />
        </Form>
    )
}

const Feedback = () => {
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
                            history.push('/')
                        }}>Read a Chapter</button>
                    </>)
                : (
                    <>
                        <h2>Give Feedback</h2>
                        <UserContext.Consumer>
                            {({ user }) => (
                                <FeedBackForm user={user} setPosted={setPosted} />
                            )}
                        </UserContext.Consumer>
                    </>
                )}
        </div>
    )
}

export default Feedback