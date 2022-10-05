import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/userSlice";
import { useState } from "react";

const Register = () => {
  const dispatch = useDispatch();


  const registeredUser = useSelector((state) => state.user)

  // console.log(registeredUser);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser(prev => ({...prev,[e.target.name]:e.target.value}))
  }

  // console.log(user);

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
      <h2>Welcome Back {registeredUser?.user?.name} !</h2>
      <div>
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
      </div>
      <button onClick={submitForm}>Sign Up </button>
      <p>
        Do you have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
