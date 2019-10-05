import React from 'react'
import FacebookLogo from './icons/FacebookLogo'
import './styles/FacebookAuthButton.css'

export default ({ onClick }) =>
    <div className="facebook-button" onClick={onClick} tabIndex="0">
        <FacebookLogo />
        <span>Continue with Facebook</span>
    </div>