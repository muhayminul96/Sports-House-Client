import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Spinner className="my-5 " animation="border" variant="dark" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loading;
