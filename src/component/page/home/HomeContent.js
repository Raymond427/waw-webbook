import React, { useState } from 'react'
import '../../../styles/ChapterCarousel.css'
import '../../../styles/ChapterCarouselSlide.css'
import '@brainhubeu/react-carousel/lib/style.css'
import '../../../styles/Home.css'
import HomePageBackground from './HomepageBackground'
import Navigation from '../../navigation'
import homePageImages from '../../../data/homePageImages.json'
import ChapterCarousel from './ChapterCarousel'

const HomeContents = ({ chapters }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0)

    const currentChapter = chapters[currentIndex - 1]

    return (
        <div className="Home">
            <Navigation hideLogo hideBack />
            {currentIndex === 0 ? (
                <HomePageBackground
                    key="Select a Chapter"
                    showLogo
                    name="Select a Chapter"
                    images={homePageImages.home.images}
                />
            ) : (
                <HomePageBackground
                    key={currentChapter.name}
                    name={currentChapter.name}
                    images={homePageImages[currentChapter.name].images}
                    quote={homePageImages[currentChapter.name].quote}
                    author={homePageImages[currentChapter.name].author}
                />
            )}
            <ChapterCarousel currentIndex={currentIndex} chapters={chapters} setCurrentIndex={setCurrentIndex} />
        </div>
    )
}

export default HomeContents