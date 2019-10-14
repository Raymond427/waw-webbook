import React from 'react'

const Aside = ({ title, children }) => (
    <aside className="chapter-aside">
        <h4>{title}</h4>
        {children}
    </aside>
)

export default Aside