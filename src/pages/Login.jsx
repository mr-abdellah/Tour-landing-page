import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import ".././styles/auth.css";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const submitForm = (data) => {
    dispatch(
      login({
        name: data.name,
        email: data.email,
        password: data.password,
        loggedIn: true,
      })
    );
    window.location.reload();
  };

  return (
    <div className="login">
      <h1>Turrico</h1>
      <h2>Welcome Back !</h2>
      <form>
        <TextField
          required
          id="outlined-required"
          label="Required"
          autoComplete="true"
          placeholder="Enter your email"
          type="email"
          {...register("email")}
        />
        <TextField
          typeof="password"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          {...register("password")}
        />
      </form>
      <button onClick={handleSubmit(submitForm)}>Login</button>
      <p>
        Don't you have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
