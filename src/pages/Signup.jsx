import React from "react";
import "../styles/Signup.css";
import api from '../api'

const Signup = () => {
  async function RegisterUser(userData){
    try{
      const res = await api.post('user/register/', userData)
      console.log(res.data)
    }catch(error){console.error(error)}
  }

  function getData(formData){
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirm = formData.get('confirm')
    if (password === confirm){
      if (password.length < 8){
        alert("Error! password must be 8 characters long")
      }else{
        RegisterUser({username, email, password})
      }
      
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <p>Create your account to start shopping with us.</p>
        <form className="signup-form" action={getData}>
          <input name="username" type="text" placeholder="Username" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <input  name="confirm"type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
