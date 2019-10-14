import React from 'react'
import Figure from './Figure'

const Image = ({ src, alt, caption }) => (
    <Figure caption={caption}>
        <img className="chapter-figure-image" src={src} alt={alt} />
    </Figure>
)

export default Image