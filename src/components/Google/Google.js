import React from 'react';
import app from '../../firebase.init';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';
const Google = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState({})
    const gooleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleSignInHandler = () => {

        signInWithPopup(auth, gooleProvider)
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
    const gitHubSignInHandler = () => {

        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user)

            })
            .catch((error) => {
                console.log(error)
            })

    }

    console.log(user)
    const { email, displayName } = user
    return (
        <div className='border p-5 w-50 mx-auto m-5'>
            
            <p>Name : {displayName}</p>
            <p>Email : {email}</p>
            <br />

            {
                user.uid ? <button onClick={googleSignOutHandler}>Sign Out</button> : <div>
                    <button onClick={googleSignInHandler}>Sign in with Google</button>
                    <button onClick={gitHubSignInHandler}>Sign in with Github</button>

                </div>
            }
        </div>
    );
};

export default Google;