import { Form, Link, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Logged in successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const testUser = async () => {
    const data = {
      email: "test@example.com",
      password: "secure123",
    };

    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a look");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>

        <FormRow type="email" name="email" defaultValue="abcde@gmail.com" />
        <FormRow type="password" name="password" defaultValue="password" />

        <SubmitBtn />

        <button type="submit" className="btn btn-block" onClick={testUser}>
          Explore The App
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            {" "}
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
