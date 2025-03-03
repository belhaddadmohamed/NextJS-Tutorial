import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'test@example.com' && password === 'password') {
      toast.success('Login successful');
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
  );
};

export default Login;