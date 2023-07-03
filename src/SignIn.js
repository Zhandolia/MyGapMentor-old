// import React from 'react';
// import './App.css';

// function SignIn(){
//     return(
//     <div id="grad1" className="App">
//       <div className="navbar">
//         <a href="/">Home</a>
//         <a href="about">About us</a>
//         <a href="stories">Success Stories</a>
//         <a href="plans">Plans</a>
//         <a href="contact">Contact us</a>
//         <a href="signin">Sign in</a>
//       </div>
//       <h2>Sign In</h2>
//     </div>
//     )
// }

// export default SignIn

import React, { useState } from 'react';
import './App.css';

function SignIn() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
    console.log('Login Form Submitted:', loginData);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Handle registration form submission
    console.log('Registration Form Submitted:', registrationData);
  };

  return (
    <div id="grad1" className="App">
      <div className="navbar">
        <a href="/">Home</a>
        <a href="about">About us</a>
        <a href="stories">Success Stories</a>
        <a href="plans">Plans</a>
        <a href="contact">Contact us</a>
        <a href="signin">Sign in</a>
      </div>
      <h2>Sign In</h2>
      <div className="form-container">
        <h3>Login</h3>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="form-container">
        <h3>Registration</h3>
        <form onSubmit={handleRegistrationSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={registrationData.name}
              onChange={handleRegistrationChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={registrationData.email}
              onChange={handleRegistrationChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={registrationData.password}
              onChange={handleRegistrationChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
