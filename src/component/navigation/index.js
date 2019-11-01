import React from 'react'
import '../../styles/Navigation.css'
import AuthenticationLinks from './AuthenticationLinks'
import Arrow from '../icon/Arrow'
import MiniLogo from '../icon/MiniLogo'
import ThemeToggler from '../theme/ThemeToggler'
import { UserContext } from '../provider/UserProvider'
import { withRouter } from 'react-router-dom'
import { PATHS } from '../../utils/constants'

export default withRouter(({ hideLogo = false, hideBack = false, backPath, showThemeToggle = false, history }) => (
    <UserContext.Consumer>
        {({ user }) =>
            <nav className="nav">
                {!hideBack &&
                    <button className="back-button" onClick={() => history.goBack()}>
                        <Arrow left />
                    </button>}
                {!hideLogo &&
                    <button className="nav-home-button" onClick={() => history.push(PATHS.HOME)}>
                        <MiniLogo />
                    </button>}
                {user && showThemeToggle && <ThemeToggler />}
                <AuthenticationLinks history={history} />
            </nav>
        }
    </UserContext.Consumer>
))
