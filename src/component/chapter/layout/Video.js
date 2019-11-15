import React from 'react'
import Figure from './Figure'
import { analytics, MAX_ATTRIBUTE_VALUE_LENGTH } from '../../../firebase'

const Video = ({ src, caption, fileExtention }) => (
    <Figure caption={caption}>
        <video className="chapter-figure-video" controls onPlay={() => analytics.logEvent('play_video', { source: src.slice(0, MAX_ATTRIBUTE_VALUE_LENGTH) })}>
            <source src={src} type={`video/${fileExtention}`} />
            Your browser or device does not support this video.
        </video>
    </Figure>
)

export default Video