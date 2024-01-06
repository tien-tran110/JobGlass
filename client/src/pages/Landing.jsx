import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>

          <p>
            JobGlass is a job tracking app that helps you keep track of all your
            job applications in one place. You can add, edit, and delete jobs as
            you please. You can also add notes to each job to keep track of your
            progress. Save you time and energy by using JobGlass to keep track
            of your job applications.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>

          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
