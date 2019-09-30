import React from 'react'
import './styles/Navigation.css'
import AuthenticationLinks from './AuthenticationLinks'
import Arrow from './icons/Arrow'
import MiniLogo from './icons/MiniLogo'
import ThemeToggler from './ThemeToggler'
import { UserContext } from './UserProvider'
import { withRouter } from 'react-router-dom'

export default withRouter(({ hideLogo = false, hideBack = false, backPath, showThemeToggle = false, history }) =>
    <UserContext.Consumer>
        {({ user }) =>
            <nav className="nav">
                {!hideBack &&
                    <button className="back-button" onClick={() => history.goBack()}>
                        <Arrow left />
                    </button>}
                {!hideLogo &&
                    <button className="nav-home-button" onClick={() => history.push('/')}>
                        <MiniLogo />
                    </button>}
                {user && showThemeToggle && <ThemeToggler />}
                <AuthenticationLinks history={history} />
            </nav>
        }
    </UserContext.Consumer>
)