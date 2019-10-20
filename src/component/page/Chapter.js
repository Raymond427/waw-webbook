import React from 'react'
import chapters from '../../data/chapters'
import chapterImages from '../../data/homePageImages'
import '../../styles/Chapter.css'
import Navigation from '../navigation'
import Picture from '../Picture'
import Habits from '../chapter/chapterContent/habits'

const Chapter = ({ chapter = chapters[0] }) => {
    const backgroundImgs = chapterImages[chapter.name].chapterBackgroundImages
    const ChapterContents = chapterName => {
        switch (chapterName) {
            case chapterName === 'habits':
                return <Habits />
            default:
                return <Habits />
        }
    }

    return (
        <div className="Chapter">
            <div className="chapter-container">
                <Picture className="chapter-background-image" alt="chapter background" images={backgroundImgs} />
                <div className="chapter-content">
                    <Navigation showThemeToggle />
                    {ChapterContents(chapter.name)}
                </div>
            </div>
        </div>
    )
}

export default Chapter