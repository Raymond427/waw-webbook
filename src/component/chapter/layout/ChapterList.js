import React, { useState } from 'react'
import { kebabCase, capitalize } from '../../../utils'

export const ChapterContentListContext = React.createContext()

export const ChapterContentListProvider = ({ children }) => {
    const [ contentList, setContentList ] = useState([])

    return (
        <ChapterContentListContext.Provider value={{contentList, setContentList}}>
            {children}
        </ChapterContentListContext.Provider>
    ) 
}

const ChapterContentList = () => (
    <ChapterContentListContext.Consumer>
        {({ contentList }) => (
            <>
                <h4 className="chapter-content-list-heading">IN THIS CHAPTER</h4>
                <ul className="chapter-content-list">
                    {contentList.map(chapterTitle => (
                        <li key={chapterTitle}>
                            <p
                                onClick={() => {
                                    document.getElementById(kebabCase(chapterTitle)).scrollIntoView({behavior: 'smooth'})
                                    }}
                                className="chapter-content-list-link"
                            >
                                {capitalize(chapterTitle)}
                            </p>
                        </li>
                    ))}
                </ul>
            </>
        )}
    </ChapterContentListContext.Consumer>
)

export default ChapterContentList