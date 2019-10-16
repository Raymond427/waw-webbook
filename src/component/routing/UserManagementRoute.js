import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import PasswordReset from '../page/PasswordReset'

const USER_MANAGEMENT_MODES = {
    RESET_PASSWORD: 'resetPassword'
}

const UserManagementRoute = () => {
    const userManagementParams = new URLSearchParams(useLocation().search)
    const userManagementMode = userManagementParams.get('mode')
    switch (userManagementMode) {
        case USER_MANAGEMENT_MODES.RESET_PASSWORD:
            return <PasswordReset searchParams={userManagementParams} />
        default:
            return <Redirect to="/" />
    }
}

export default UserManagementRoute