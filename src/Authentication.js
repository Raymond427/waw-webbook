import React, { useState } from 'react'
import { UserContext } from './UserProvider'

const SignInAndSignUp = setUser => {
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
            <button>{`Sign ${newUser ? 'Up' : 'In'} with Google`}</button>
        </div>
    )
}

const UserInfo = user =>
    <div>
        <img alt="user thumbnail" src={user.img} />
        <p>{user.email}</p>
    </div>

const Authentication = () =>
    <UserContext.Consumer>
        {({ user, setUser }) =>
            <div>
                {user ? <UserInfo user={user} /> : <SignInAndSignUp setUser={setUser}/>}
            </div>
        }
    </UserContext.Consumer>

export default Authentication