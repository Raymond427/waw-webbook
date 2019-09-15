import React from 'react'
import { Redirect } from 'react-router-dom'

const ProtectedRoute = ({ condition, Component, pathIfRestricted = '/', ...rest }) => (
    condition ? <Component {...rest} /> : <Redirect to={pathIfRestricted} noThrow />
)

export default ProtectedRoute