import React from 'react'

const Chapter = ({ chapter }) => {
    const backgroundImgSrc = chapter.images[chapter.images.length - 1].src
    return (
        <div className="Chapter page">
            <img alt="bruce lee" src={require(`../images/${backgroundImgSrc}`)} />
        </div>
    )
}

export default Chapter