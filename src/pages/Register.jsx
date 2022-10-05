import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/userSlice";
import { useState } from "react";
import ".././styles/auth.css";

const Register = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = () => {
    dispatch(
      register({
        name: user.name,
        email: user.email,
        password: user.password,
        loggedIn: false,
      })
    );
  };
  return (
    <div className="register">
      <h1>Turrico</h1>
      <h2>Welcome Back!</h2>
      <form>
        <TextField
          required
          id="outlined-required"
          label="Name"
          autoComplete="true"
          placeholder="Enter your name"
          type="name"
          name="name"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          autoComplete="true"
          placeholder="Enter your email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <TextField
          typeof="password"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
      </form>
      <button onClick={submitForm}>Sign Up </button>
      <p>
        Do you have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
