import React from 'react'
import './styles/Navigation.css'
import { Link } from 'react-router-dom'
import AuthenticationLinks from './AuthenticationLinks'
import Arrow from './icons/Arrow'
import MiniLogo from './icons/MiniLogo'
import Moon from './icons/Moon'
import { UserContext } from './UserProvider'

export default ({ hideLogo = false, hideBack = false, backPath = '/', showThemeToggle = false }) =>
    <UserContext.Consumer>
        {({ user }) =>
            <nav className="nav">
                {!hideBack &&
                    <div className="back-wrapper">
                        <Link to={backPath}><Arrow left /></Link>
                    </div>}
                {!hideLogo &&
                    <Link to="/">
                        <MiniLogo />
                    </Link>}
                {user && showThemeToggle && <Moon />}
                <AuthenticationLinks />
            </nav>
        }
    </UserContext.Consumer>