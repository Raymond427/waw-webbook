import React from 'react'
import { Redirect } from 'react-router-dom'

const ChapterRoute = ({ condition = true, Component, redirectOnRestricted = '/', computedMatch, user, chapters, ...rest }) => {
    const chapterName = computedMatch.params.chapterName
    if (!chapterName) {
        return <Redirect to='/' />
    }

    const chapter = chapters.find(chapter => chapter.name === chapterName)

    if (!chapter) {
        return <Redirect to='/' />
    }

    return (condition
        ?
            user
                ?
                    (chapter.purchased || chapter.price === 0)
                        ? <Component chapter={chapter} {...rest} />
                        : <Redirect to={{ pathname: `/buy/${chapterName}`, state: { pathOnPurchase: `/chapters/${chapterName} `}}} />
                : <Redirect to={{ pathname: '/login', state: { pathOnSignIn: `/chapters/${chapterName}` }}} />
        :
            <Redirect to='/' />
    )
}

export default ChapterRoute