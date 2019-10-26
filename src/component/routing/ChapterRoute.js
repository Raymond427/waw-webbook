import React from 'react'
import { Redirect } from 'react-router-dom'
import { purchasedIsSet } from '../../utils'

const ChapterRoute = ({ condition = true, Component, redirectOnRestricted = '/', computedMatch, user, chapters, ...rest }) => {
    const chapterName = computedMatch.params.chapterName
    if (!chapterName) {
        return <Redirect to='/' />
    }

    const chapter = chapters.find(chapter => chapter.name === chapterName)

    if (!chapter) {
        return <Redirect to='/' />
    }

    if (condition) {
        if (user) {
            if (purchasedIsSet(chapters)) {
                if (chapter.purchased || chapter.price === 0) {
                    return <Component chapter={chapter} {...rest} />
                } else {
                    return <Redirect to={{ pathname: `/buy/${chapterName}`, state: { pathOnPurchase: `/chapters/${chapterName} `}}} />
                }
            } else {
                return null
            }
        } else {
            return <Redirect to={{ pathname: '/login', state: { pathOnSignIn: `/chapters/${chapterName}` }}} />
        }
    } else {
        return <Redirect to='/' />
    }
}

export default ChapterRoute