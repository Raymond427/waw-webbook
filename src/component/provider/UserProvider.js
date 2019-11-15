import React, { useState, useEffect } from 'react'
import { analytics } from '../../firebase'

export const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        if (user) {
            analytics.setUserId(user.user.uid)
        }
    }, [ user ])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider