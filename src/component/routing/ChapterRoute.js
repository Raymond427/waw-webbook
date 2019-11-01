import React from 'react'
import { Redirect } from 'react-router-dom'
import { purchasedIsSet } from '../../utils'
import { PATHS } from '../../utils/constants'

const ChapterRoute = ({ condition = true, Component, redirectOnRestricted = PATHS.HOME, computedMatch, user, chapters, ...rest }) => {
    const chapterName = computedMatch.params.chapterName
    if (!chapterName) {
        return <Redirect to={PATHS.HOME} />
    }

    const chapter = chapters.find(chapter => chapter.name === chapterName)

    if (!chapter) {
        return <Redirect to={PATHS.HOME} />
    }

    if (condition) {
        if (user) {
            if (purchasedIsSet(chapters)) {
                if (chapter.purchased || chapter.price === 0) {
                    return <Component chapter={chapter} {...rest} />
                } else {
                    return <Redirect to={{ pathname: `${PATHS.BUY}/${chapterName}`, state: { pathOnPurchase: `${PATHS.CHAPTERS}/${chapterName} `}}} />
                }
            } else {
                return null
            }
        } else {
            return <Redirect to={{ pathname: PATHS.LOGIN, state: { pathOnSignIn: `${PATHS.CHAPTERS}/${chapterName}` }}} />
        }
    } else {
        return <Redirect to={PATHS.HOME} />
    }
}

export default ChapterRoute