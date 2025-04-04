// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login to LMS</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button label="Login" onClick={handleLogin} />
        </form>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <button onClick={() => navigate('/signup')} className="text-blue-500 hover:underline">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
