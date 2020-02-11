import React from 'react'

const UpdateDialog = ({ onClose }) => (
    <>
        <h3>Updates Available</h3>
        <p>We've got new content available!</p>
        <footer className="dialog-footer">
            <button onClick={onClose}>Later</button>
        </footer>
    </>
)

export default UpdateDialog