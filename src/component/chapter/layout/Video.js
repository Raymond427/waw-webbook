import React from 'react'
import Figure from './Figure'

const Video = ({ src, caption, fileExtention }) => (
    <Figure caption={caption}>
        <video className="chapter-figure-video" controls>
            <source src={src} type={`video/${fileExtention}`} />
            Your browser or device does not support this video.
        </video>
    </Figure>
)

export default Video