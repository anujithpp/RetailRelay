import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" 
            required
          />
        </div>
        <button type="submit">Log In</button>
        <a href="#">Forgot password?</a>
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </form>
    </div>
  );
}

export default Login;
