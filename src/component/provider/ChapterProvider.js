import React, { useEffect, useState } from 'react'
import { getChapters, performanceMonitor, MAX_ATTRIBUTE_VALUE_LENGTH } from '../../firebase'
import { addPurchasedProp, compareChapterNames } from '../../utils'
import homePageImages from '../../data/homePageImages.json'

export const { Provider, Consumer } = React.createContext()
export const ChapterConsumer = Consumer

const ChapterProvider = ({ user, orders, children }) => {
    const [ chapters, setChapters ] = useState([])

    useEffect(() => {
        const snapshot = () => {
            const chaptersFetchTrace = performanceMonitor.trace('fetchChapters')
            chaptersFetchTrace.start()
            getChapters()
                .then(snapShot => {
                        chaptersFetchTrace.putAttribute('numOfChapters', `${snapShot.docs.length}`)
                        chaptersFetchTrace.putAttribute('result', 'success')
                        setChapters(
                            snapShot.docs
                                .filter(chapter => homePageImages[chapter.data().name])
                                .map(doc => addPurchasedProp(user, orders, { id: doc.id, ...doc.data() }))
                                .sort(compareChapterNames)
                        )
                    }
                )
                .catch(({ message }) => {
                    chaptersFetchTrace.putAttribute('result', 'fail')
                    chaptersFetchTrace.putAttribute('errorMessage', message.slice(0, MAX_ATTRIBUTE_VALUE_LENGTH))
                })
                .finally(() => chaptersFetchTrace.stop())
        }
        snapshot()
    }, [ orders ])
    
    return (
        <Provider value={{ chapters }}>
            {children}
        </Provider>
    )
}

export default ChapterProvider
