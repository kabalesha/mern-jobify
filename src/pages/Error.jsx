import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error page</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Error;
