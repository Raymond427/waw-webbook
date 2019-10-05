import React from 'react'
import './styles/GoogleAuthButton.css'
import GoogleLogo from './icons/GoogleLogo'

export default ({ onClick, newUser }) => {
    const theme = document.documentElement.dataset.theme

    return (
        <div className={`google-button ${theme === 'dark' ? 'google-button__dark' : 'google-button__light'}`} onClick={onClick} tabIndex="0">
            <GoogleLogo />
            <span>{`Sign ${newUser ? 'up' : 'in'} with Google`}</span>
        </div>
    )
}