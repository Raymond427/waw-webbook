import React, { useState } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import history from '../../../history'
import Arrow from '../../icon/Arrow'
import '../../../styles/ChapterCarousel.css'
import '../../../styles/ChapterCarouselSlide.css'
import '@brainhubeu/react-carousel/lib/style.css'
import '../../../styles/Home.css'
import HomePageBackground from './HomepageBackground'
import Navigation from '../../navigation'
import { capitalize, usdFormat } from '../../../utils'
import homePageImages from '../../../data/homePageImages.json'

const ChapterCarouselSlide = ({ title, description, available, chapterName, buttonText, currentSlide }) =>
    <div className="chapter-carousel-slide">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="button" tabIndex={currentSlide ? '0' : '-1'} disabled={!available} onClick={() => history.push(`/chapters/${chapterName}`)}>{buttonText}</button>
    </div>

const ChapterCarousel = ({ chapters }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const onChange = newIndex => setCurrentIndex(newIndex)
    const firstIndex = currentIndex === 0
    const numOfSlides = chapters.length + 1
    const lastIndex = currentIndex === numOfSlides - 1
    const currentChapter = chapters[currentIndex - 1]

    return (
        <div className="Home">
            <Navigation hideLogo hideBack />
            {currentIndex === 0 ?
            <HomePageBackground
                showLogo
                name="Select a Chapter"
                images={homePageImages.home.images}
            />
            :
            <HomePageBackground
                name={currentChapter.name}
                images={homePageImages[currentChapter.name].images}
                quote={homePageImages[currentChapter.name].quote}
                author={homePageImages[currentChapter.name].author}
            />}
            <div className="home-carousel">
                <Carousel arrowLeft={<Arrow className={firstIndex ? 'arrow--inactive' : ''} color="#FFFFFF" left />} arrowRight={<Arrow className={lastIndex ? 'arrow--inactive' : ''} color="#FFFFFF" />} addArrowClickHandler centered draggable keepDirectionWhenDragging slidesPerPage={1} value={currentIndex} onChange={onChange}>
                    {[
                        <ChapterCarouselSlide
                            key="0-home"
                            title="Select a Chapter"
                            chapterName={chapters[0].name}
                            description="Dolor purus non enim praesent elementum facilisis leo. Ultricies integer quis auctor elit sed vulputate. Vivamus at augue eget arcu dictum varius duis at consectetur."
                            buttonText="Read the first Chapter for Free"
                            available={true}
                            purchased={chapters[0].purchased}
                            currentSlide={currentIndex === 0}
                        />,
                        ...chapters.map(({ id, name, description, available, purchased, price }) =>
                            <ChapterCarouselSlide
                                key={`${id}-${name}`}
                                title={capitalize(name)}
                                chapterName={name}
                                description={description}
                                buttonText={
                                    available
                                        ? purchased ? `Read ${capitalize(name)}` : `Purchase ${capitalize(name)} for ${usdFormat(price)}`
                                        : 'Coming Soon'
                                }
                                available={available}
                                purchased={purchased}
                                currentSlide={currentIndex === id + 1}
                            />
                        )
                    ]}
                </Carousel>
                <Dots value={currentIndex} onChange={onChange} number={numOfSlides} />
            </div>
        </div>
    )
}

export default ChapterCarousel