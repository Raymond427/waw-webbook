import React, { useState } from 'react'
import { UserContext } from './UserProvider'
import { signInWithGoogle } from './firebase'

const SignInAndSignUp = ({ setUser }) => {
    const [ newUser, setNewUser ] = useState(true)

    return(
        <div>
            <button onClick={() => setNewUser(true)} disabled={newUser}>Sign Up</button>
            <button onClick={() => setNewUser(false)} disabled={!newUser}>Sign In</button>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" />
            </form>
            {!newUser && <button>Reset Password</button>}
            <button onClick={() => setUser(signInWithGoogle)}>{`Sign ${newUser ? 'Up' : 'In'} with Google`}</button>
        </div>
    )
}

const UserInfo = ({ setUser, user: { user: { photoURL, displayName, email } } }) =>
    <div>
        <img alt="user thumbnail" src={photoURL} />
        <p>Name: {displayName}</p>
        <p>Email: {email}</p>
        <button onClick={() => setUser()}>Sign Out</button>
    </div>

const Authentication = () =>
    <UserContext.Consumer>
        {({ user, setUser }) =>
            <div>
                {user ? <UserInfo user={user} setUser={setUser} /> : <SignInAndSignUp setUser={setUser}/>}
            </div>
        }
    </UserContext.Consumer>

export default Authentication