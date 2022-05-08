import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setJWT } from "../../../costumFunction";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loadig/Loading";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  // login switch
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    setJWT(email);
    navigate(from, { replace: true });
  };

  if (loading) {
    return <Loading />;
  }

  if (user) {
    // navigate(from, { replace: true })
  }
  return (
    <div className="my-5">
      <h1 className="fs-1 fw-bolder text-primary">Login</h1>
      <Form className="w-50 mx-auto my-5" onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>{error?.message}</p>
        <Button className="w-100 mb-3  fw-bolder" variant="dark" type="submit">
          Login
        </Button>

        <p className="my-3 align-baseline">
          Are You new?
          <span
            className="btn btn-link text-decoration-none"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register now
          </span>
        </p>
      </Form>
      <p className="fs-4">------------ Or ------------</p>

      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
