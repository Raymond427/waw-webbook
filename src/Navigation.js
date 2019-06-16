import React from 'react'
import { Link } from 'react-router-dom'
import AuthenticationLinks from './AuthenticationLinks'

export default ({ backPath = '/' }) =>
    <nav className="nav">
        {backPath && <Link to={backPath}>Back</Link>}
        <Link to='/'>Home</Link>
        <AuthenticationLinks />
    </nav>