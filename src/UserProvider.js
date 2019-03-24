import React, { useState } from 'react'
import { auth } from './firebase'

export const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)

    return(
        <UserContext.Provider value={{
            user,
            setUser: provider =>
                provider
                    ? provider().then(user => setUser(user))
                    : auth.signOut().then(() => setUser(null))
            
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider