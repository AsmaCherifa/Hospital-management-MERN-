import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="register">
    <div className="col-1">
      <h2>Login</h2>
      <span>Enjoy our platform</span>
      


      <form id='form' className='flex flex-col' onSubmit={handleSubmit}>


      <input type="text" value={username} onChange={handleUsernameChange} placeholder='Username' />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' />

      <button className='btn'>Sign In</button>
          </form>
        </div>
      </div>
  );
};

export default LoginForm;
