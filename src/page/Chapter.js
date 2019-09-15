import React from 'react'

const Chapter = ({ chapter }) => {
    console.log(chapter)
    const backgroundImgSrc = chapter.images[chapter.images.length - 1].src
    return (
        <div className="Chapter page">
            <img alt="bruce lee" src={require(`../images/${backgroundImgSrc}`)} />
            {console.log(chapter)}
        </div>
    )
}

export default Chapter