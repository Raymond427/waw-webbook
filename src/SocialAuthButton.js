import React from 'react'
import './styles/SocialAuthButton.css'
import GoogleLogo from './icons/GoogleLogo'
import FacebookLogo from './icons/FacebookLogo'

export default ({ name, onClick, newUser }) =>
    <div className={`social-button ${name}-button`} onClick={onClick} tabIndex="0">
        {name === 'google' ? <GoogleLogo /> : <FacebookLogo />}
        <span>{name === 'google' ? `Sign ${newUser ? 'up' : 'in'} with Google` : 'Continue with Facebook'}</span>
    </div>