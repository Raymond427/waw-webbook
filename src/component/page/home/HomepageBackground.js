import React from 'react'
import Logo from '../../icon/Logo'
import '../../../styles/HomePageBackground.css'
import Picture from '../../Picture'

const HomePageBackground = ({ name, showLogo, images, quote, author }) =>
    <div className={`home-page-background home-page-background--${name}`}>
        <div className="home-page-background-shade"></div>
        {showLogo && <Logo />}
        <Picture className={`home-page-background-img home-page-background-img-${name}`} images={images} />
        {quote && author && <div className={`home-page-background-quote home-page-background-quote-${name}`}>
            <p className={`home-page-background-quote-text home-page-background-quote-text-${name}`}>{quote}</p>
            <p className={`home-page-background-author home-page-background-author-${name}`}>{`- ${author}`}</p>
        </div>}
    </div>

export default HomePageBackground