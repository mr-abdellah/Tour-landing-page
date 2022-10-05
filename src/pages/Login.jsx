import TextField from "@mui/material/TextField";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser);
  const submitForm = (data) => {
    dispatch(
      login({
        name: data.name,
        email: data.email,
        password: data.password,
        loggedIn: true,
      })
    );
    window.location.reload()
  };

  const handleLogout = () => {
    window.location.reload()
    dispatch(logout());
  };

  return (
    <div className="login">
      <h2>Welcome Back !</h2>
      <div>
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
      </div>
      <button onClick={handleSubmit(submitForm)}>Login</button>
      <p>
        Don't you have an account? <Link to="/register">Sign up</Link>
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
