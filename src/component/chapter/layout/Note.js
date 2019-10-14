import React from 'react'

const Note = ({children}) => (
    <aside className="chapter-note">
        <span>Note: </span>
        {children}
    </aside>
)

export default Note
