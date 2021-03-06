import React from "react";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../shared/Loadig/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    console.log(user);
    navigate(from, { replace: true })
  }

  return (
    <div>
      <p>{error ? error.message : ""}</p>
      <button
        className="btn btn-dark"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
