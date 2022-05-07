import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { matcher } from "../../../costumFunction";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loadig/Loading";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Register = () => {
  const [sendEmailVerification, sending, EmailVarificationError] = useSendEmailVerification(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  let email;
  let password;
  let confirmPassword;

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    // collect email password

    email = event.target.email.value;
    password = event.target.password.value;
    confirmPassword = event.target.confirmPassword.value;
    console.log(email, password, confirmPassword);

    // password validation and login with email

    if (matcher(password, confirmPassword)) {
        await createUserWithEmailAndPassword(email, password);
          await sendEmailVerification();
          toast('verification mail is sended')
    } else {
      alert("Password and confirm Password not match");
    }
  };

  if (loading || sending ) {
    return <Loading />;
  }

  if (user) {
    navigate("/");
  }

  return (
    <div className="my-5">
      <h1 className="fs-1 fw-bolder text-primary">Sign Up</h1>
      <Form className="w-50 mx-auto my-5" onSubmit={handleSignupSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p>{error ? error.message : ""}</p>
        <Button className="w-100 fw-bolder mb-2" variant="dark" type="submit">
          Register
        </Button>
        <p className="my-3 align-baseline">
          You have any account?
          <span
            className="btn btn-link text-decoration-none"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </p>
      </Form>

      <p className="fs-4">------------ Or ------------</p>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Register;
