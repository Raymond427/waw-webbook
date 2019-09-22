import React from 'react'
import './styles/Navigation.css'
import { Link } from 'react-router-dom'
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
                    <div className="back-wrapper">
                        <Link to={backPath}><Arrow left /></Link>
                    </div>}
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