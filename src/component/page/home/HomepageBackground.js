import React, { useState, useEffect } from 'react'
import Logo from '../../icon/Logo'
import '../../../styles/HomePageBackground.css'
import Picture from '../../Picture'
import { kebabCase } from '../../../utils'
import { CSSTransition } from 'react-transition-group'

const HomePageBackground = ({ name, showLogo, images, quote, author }) => {
    const [ mounted, setMounted ] = useState(false)
    const chapterName = kebabCase(name)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
            <div className={`home-page-background home-page-background--${chapterName}`}>
                <div className="home-page-background-shade"></div>
                {showLogo && <Logo />}
                <CSSTransition
                    classNames="home-page-background-img"
                    in={mounted}
                    timeout={300}
                    key={chapterName}
                    unmountOnExit
                >
                    <Picture className={`home-page-background-img home-page-background-img-${chapterName}`} images={images} />
                </CSSTransition>
                {quote && author && <div className={`home-page-background-quote home-page-background-quote-${chapterName}`}>
                    <p className={`home-page-background-quote-text home-page-background-quote-text-${chapterName}`}>{quote}</p>
                    <p className={`home-page-background-author home-page-background-author-${chapterName}`}>{`- ${author}`}</p>
                </div>}
            </div>
    )
}

export default HomePageBackground
