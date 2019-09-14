import React, { useState } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import history from './history'
import Arrow from './icons/Arrow'
import './styles/ChapterCarousel.css'
import './styles/ChapterCarouselSlide.css'
import '@brainhubeu/react-carousel/lib/style.css'
import './styles/Home.css'
import HomePageBackground from './HomepageBackground'
import Navigation from './Navigation'

const ChapterCarouselSlide = ({ name, description, available, chapterNumber, buttonText }) =>
    <div className="chapter-carousel-slide">
        <h1>{name}</h1>
        <p>{description}</p>
        <button className="button" disabled={!available} onClick={() => history.push(`/chapters/${chapterNumber}`)}>{buttonText}</button>
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
                images={[{ src: 'island.png' }]}
            />
            :
            <HomePageBackground
                name={currentChapter.name}
                images={currentChapter.images}
                quote={currentChapter.quote}
                author={currentChapter.author}
            />}
            <div className="home-carousel">
                <Carousel arrowLeft={<Arrow className={firstIndex ? ' arrow--inactive' : ''} left />} arrowRight={<Arrow className={lastIndex ? ' arrow--inactive' : ''} />} addArrowClickHandler centered draggable keepDirectionWhenDragging slidesPerPage={1} value={currentIndex} onChange={onChange}>
                    {[
                        <ChapterCarouselSlide
                            key="0-home"
                            name="Select a Chapter"
                            description="Dolor purus non enim praesent elementum facilisis leo. Ultricies integer quis auctor elit sed vulputate. Vivamus at augue eget arcu dictum varius duis at consectetur."
                            buttonText="Read the first Chapter for Free"
                            chapterNumber={1}
                            available={true}
                        />,
                        ...chapters.map(({ id, name, description, chapterNumber, available }) =>
                            <ChapterCarouselSlide
                                key={`${id}-${name}`}
                                name={name}
                                description={description}
                                buttonText={available ? `Read ${name}` : 'Coming Soon'}
                                chapterNumber={chapterNumber}
                                available={available}
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