
import React, { useState } from 'react';
import './App.css';



function signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      
      <form className='login-form' onSubmit={handleSubmit}>
        
        <h2 className='form-title'>Sign UP</h2>
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='form-button'>
          Sign In
        </button>
        <p>
          New User? <a href='/signup'>Sign Up</a>
        </p>      </form>
    </div>
  );
}

export default signup;
