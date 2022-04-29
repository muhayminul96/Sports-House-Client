import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Login = () => {
  return (
    <div className="my-5">
      <h1>Login</h1>
      <Form className="w-50 mx-auto my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100" variant="dark" type="submit">
          Login
        </Button>
        <div className="d-flex align-center justify-center w-50 mx-auto">
          <p className="">Are You new? <span>Register now  </span></p>
        </div>
      </Form>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
