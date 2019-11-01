import React, { useEffect, useState } from 'react'
import { getChapters } from '../../firebase'
import { addPurchasedProp, compareChapterNames } from '../../utils'

export const { Provider, Consumer } = React.createContext()
export const ChapterConsumer = Consumer

const ChapterProvider = ({ user, orders, children }) => {
    const [ chapters, setChapters ] = useState([])

    useEffect(() => {
        const snapshot = () => getChapters().then(snapShot => 
            setChapters(
                snapShot.docs.map(
                    doc => addPurchasedProp(user, orders, { id: doc.id, ...doc.data() })
                ).sort(compareChapterNames)
            )
        )
        snapshot()
    }, [ orders ])
    
    return (
        <Provider value={{ chapters }}>
            {children}
        </Provider>
    )
}

export default ChapterProvider
