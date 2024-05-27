import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Track</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quae eum nulla qui deserunt voluptatem aliquid ullam, neque eos
            voluptatum nisi autem voluptates expedita necessitatibus mollitia,
            soluta laudantium dicta! Placeat!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
