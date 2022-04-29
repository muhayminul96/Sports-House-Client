import React from 'react';
import auth from '../../../firebaseInit'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogle = () => {
        console.log(auth)
    }
    return (
        
        <div>
            <button onClick={handleGoogle}>click</button>
        </div>
    );
};

export default GoogleLogin;