import React from 'react'

const AndroidInstallDialog = ({ addToHomeScreen, closeDialog }) => (
    <>
        <h3>Did you know?</h3>
        <p>You can install this website just like a mobile app to access it easier later!</p>
        <footer className="dialog-footer">
            <button className="dialog-primary-button" onClick={() => {
                addToHomeScreen()
                closeDialog()
            }}>Sure!</button>
            <button onClick={closeDialog}>No Thanks</button>
        </footer>
    </>
)

export default AndroidInstallDialog