import React from 'react'
import chapters from '../../data/chapters'
import chapterImages from '../../data/homePageImages'
import '../../styles/Chapter.css'
import Navigation from '../navigation'
import Picture from '../Picture'
import Habits from '../chapter/chapterContent/habits'

const Chapter = ({ chapter = chapters[0] }) => {
    const backgroundImgs = chapterImages[chapter.name].chapterBackgroundImages
    return (
        <div className="Chapter">
            <div className="chapter-container">
                <Picture className="chapter-background-image" alt="chapter background" images={backgroundImgs} />
                <div className="chapter-content">
                    <Navigation showThemeToggle />
                        <Habits />
                        {/* <h4>FURTHER READING</h4>
                        <ul>
                            <li><a href="#">Excepteur sint occaecat</a></li>
                            <li><a href="#">Duis aute irure</a></li>
                            <li><a href="#">Ut enim ad minim</a></li>
                            <li><a href="#">Sed odio morbi quis commodo odio</a></li>
                            <li><a href="#">Excepteur sint occaecat</a></li>
                        </ul>
                        <h4>NEXT CHAPTER</h4>
                        <button>Product</button> */}
                </div>
            </div>
        </div>
    )
}

export default Chapter