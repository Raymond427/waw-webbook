import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import Arrow from '../../icon/Arrow'
import { capitalize, usdFormat } from '../../../utils'
import LoadingIcon from '../../icon/WhiteLoadingGIF'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../../utils/constants'

const ChapterCarouselSlide = ({ title, description, available, chapterName, buttonText, currentSlide }) => {
    const history = useHistory()

    return (
        <div className="chapter-carousel-slide">
            <h1>{title}</h1>
            <p>{description}</p>
            <button className="button" tabIndex={currentSlide ? '0' : '-1'} disabled={!available} onClick={() => history.push(`${PATHS.CHAPTERS}/${chapterName}`)}>{buttonText}</button>
        </div>
    )
}


const ChapterCarousel = ({ setCurrentIndex, currentIndex, chapters }) => {
    const onChange = newIndex => setCurrentIndex(newIndex)
    const firstIndex = currentIndex === 0
    const numOfSlides = chapters.length + 1
    const lastIndex = currentIndex === numOfSlides - 1

    return (
        <div className="home-carousel">
            {chapters.length ? (
                <>
                    <Carousel arrowLeft={<Arrow className={firstIndex ? 'arrow--inactive' : ''} color="#FFFFFF" left />} arrowRight={<Arrow className={lastIndex ? 'arrow--inactive' : ''} color="#FFFFFF" />} addArrowClickHandler centered draggable keepDirectionWhenDragging slidesPerPage={1} value={currentIndex} onChange={onChange}>
                        {([
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
                            ...chapters.map(({ id, name, description, available, price, purchased }) => (
                                    <ChapterCarouselSlide
                                        key={`${id}-${name}`}
                                        title={capitalize(name)}
                                        chapterName={name}
                                        description={description}
                                        buttonText={
                                            available
                                                ? (purchased || price === 0) ? `Read ${capitalize(name)}` : `Purchase ${capitalize(name)} for ${usdFormat(price)}`
                                                : 'Coming Soon'
                                        }
                                        available={available}
                                        purchased={purchased}
                                        currentSlide={currentIndex === id + 1}
                                    />
                                )
                            )
                        ])}
                    </Carousel>
                    <Dots value={currentIndex} onChange={onChange} number={numOfSlides} />
                </>
            ) : <LoadingIcon />}
        </div>
    )
}

export default ChapterCarousel