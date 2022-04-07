import React from 'react';
import app from '../../firebase.init';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
const Google = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider();
    const googleSignInHandler = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    const googleSignOutHandler = () => {
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .catch(() => {
                setUser({})

            })
    }
    // console.log(user)
    const { email, displayName } = user
    return (
        <div className='border p-5 w-50 mx-auto m-5'>
            <h3>Google</h3>
            <p>Name : {displayName}</p>
            <p>Email : {email}</p>
            <br />

            {
                user.email ? <button onClick={googleSignOutHandler}>Sign Out</button> : <button onClick={googleSignInHandler}>Sign in with Google</button>
            }
        </div>
    );
};

export default Google;