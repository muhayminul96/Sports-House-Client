import React from 'react';
import auth from '../../../firebaseInit'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loadig/Loading';


const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(loading){
        return <Loading></Loading>
    }
   if(user){
       console.log(user)
   }
    return (
        
        <div>
            <button className='btn btn-dark' onClick={() => {signInWithGoogle()}}>
            Sign With Google
            </button>
        </div>
    );
};

export default GoogleLogin;