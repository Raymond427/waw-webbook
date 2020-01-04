import React from 'react'

const UpdateDialog = ({ closeDialog }) => (
    <>
        <h3>Updates Available</h3>
        <p>We've got new content available!</p>
        <footer className="dialog-footer">
            <button onClick={closeDialog}>Later</button>
        </footer>
    </>
)

export default UpdateDialog