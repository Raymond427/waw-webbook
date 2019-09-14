import React from 'react'
import Logo from './icons/Logo'
import './styles/HomePageBackground.css'

const HomePageBackground = ({ name, showLogo, images, quote, author }) =>
    <div className={`home-page-background home-page-background--${name}`}>
        <div className="home-page-background-shade"></div>
        {showLogo && <Logo />}
        <picture>
            {images.length > 1 && images.map(({ src, maxWidth }) =>
                <source key={src} srcSet={require(`./images/${src}`)} media={maxWidth ? `(max-width: ${maxWidth}px)` : ''}></source>
            )}
            <img className="home-page-background-img" src={require(`./images/${images[images.length - 1].src}`)} alt="" />
        </picture>
        {quote && author && <div className={`home-page-background-quote home-page-background-quote-${name}`}>
            <p className={`home-page-background-quote-text home-page-background-quote-text-${name}`}>{quote}</p>
            <p className={`home-page-background-author home-page-background-author-${name}`}>{`- ${author}`}</p>
        </div>}
    </div>

export default HomePageBackground