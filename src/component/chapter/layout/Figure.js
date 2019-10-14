import React from 'react'

const Figure = ({caption, children}) => (
    <figure className="chapter-figure">
        {children}
        {caption && <figcaption className="chapter-figure-caption">{caption}</figcaption>}
    </figure>
)

export default Figure