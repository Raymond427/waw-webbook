import React from 'react'
import './styles/Navigation.css'
import { Link } from 'react-router-dom'
import AuthenticationLinks from './AuthenticationLinks'
import Arrow from './icons/Arrow'
import MiniLogo from './icons/MiniLogo'

export default ({ hideLogo = false, hideBack = false, backPath = '/' }) =>
    <nav className="nav">
        {!hideBack &&
            <div className="back-wrapper">
                <Link to={backPath}><Arrow left /></Link>
            </div>}
        {!hideLogo &&
            <Link to="/">
                <MiniLogo />
            </Link>}
        <AuthenticationLinks />
    </nav>