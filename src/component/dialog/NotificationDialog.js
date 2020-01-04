import React from 'react'

const NotificationDialog = ({ closeDialog }) => (
    <>
        <h3>Allow Notifications?</h3>
        <p>We'll notify you when new content is released!</p>
        <footer className="dialog-footer">
            <button className="dialog-primary-button" onClick={() => {
                closeDialog()
            }}>Sure!</button>
            <button onClick={closeDialog}>No Thanks</button>
        </footer>
    </>
)

export default NotificationDialog