import React from 'react'
import { Redirect } from 'react-router-dom'
import chapters from './data/chapters.json'

const ChapterRoute = ({ condition = true, Component, redirectOnRestricted = '/', computedMatch, user, ...rest }) => {
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
                ? chapter.purchased ? <Component chapter={chapter} {...rest} /> : <Redirect to={{ pathname: `/buy/${chapterName}`, state: { pathOnPurchase: `/chapters/${chapterName} `}}} />
                : <Redirect to={{ pathname: '/login', state: { pathOnSignIn: `/chapters/${chapterName}` }}} />
        :
            <Redirect to='/' />
    )
}

export default ChapterRoute