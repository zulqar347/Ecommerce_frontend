import React from "react";
import "../styles/Login.css";
import { login } from "../LoginLogout"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  function getData(formData){
    const username = formData.get('username')
    const password = formData.get('password')
    try{
      login({username, password})
    }catch(error){console.error(error); return} 
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <p>Welcome back! Please login to your account.</p>
        <form className="login-form" action={getData}>
          <input name="username" type="text" placeholder="Username" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
