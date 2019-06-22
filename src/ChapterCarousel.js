import React, { useState } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import history from './history'
import Arrow from './icons/Arrow'
import './styles/ChapterCarouselSlide.css'
import '@brainhubeu/react-carousel/lib/style.css'
import HomePageBackground from './HomepageBackground'

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
        <div>
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
            <Carousel arrowLeft={!firstIndex && <Arrow left />} arrowRight={!lastIndex && <Arrow />} addArrowClickHandler centered draggable keepDirectionWhenDragging slidesPerPage={1} value={currentIndex} onChange={onChange}>
                {[
                    <ChapterCarouselSlide
                        key="0-home"
                        name="Select a Chapter"
                        description="Work After Work's profitability guide will teach you stuff"
                        buttonText="Read the first Chapter for Free"
                        chapterNumber={1}
                        available={true}
                    />,
                    ...chapters.map(({ id, name, description, chapterNumber, available }) =>
                        <ChapterCarouselSlide
                            key={`${id}-${name}`}
                            name={name}
                            description={description}
                            buttonText={available ? `Read ${name}` : `${name} will be available soon`}
                            chapterNumber={chapterNumber}
                            available={available}
                        />
                    )
                ]}
            </Carousel>
            <Dots value={currentIndex} onChange={onChange} number={numOfSlides} />
        </div>
    )
}

export default ChapterCarousel