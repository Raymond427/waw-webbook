import React, { useEffect, useState } from 'react'
import { getChapters } from '../../firebase'

export const { Provider, Consumer } = React.createContext()
export const ChapterConsumer = Consumer

const ChapterProvider = ({ children }) => {
    const [ chapters, setChapters ] = useState([])

    useEffect(() => {
        const snapshot = () => getChapters().then(snapShot =>
            setChapters(snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        )
        snapshot()
    }, [])
    
    return (
        <Provider value={{ chapters }}>
            {children}
        </Provider>
    )
}

export default ChapterProvider
