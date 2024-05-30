import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText="Name" />
        <FormRow type="text" name="last name" labelText="Last name" />
        <FormRow type="text" name="location" labelText="Location" />
        <FormRow type="Email" name="email" labelText="Email" />
        <FormRow type="Password" name="password" labelText="Password" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
