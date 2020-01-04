import React from 'react'

const AndroidInstallDialog = ({ addToHomeScreen, closeDialog }) => (
    <>
        <h3>Install Work After Work!</h3>
        <p>Install our app to access the content offline and recieve updates!</p>
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