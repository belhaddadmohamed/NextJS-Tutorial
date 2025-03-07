'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your registration logic here
    if (formData.username == ''){
        toast.error('Username is required')
    }else{
        toast.success('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h1 className='text-gray-900 underline'>Register</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username:</label>
          {/* Username */}
          <input
            className="mt-1 p-2 w-full border rounded"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label  className="block text-gray-700" htmlFor="email">Email:</label>
          <input
            className="mt-1 p-2 w-full border rounded"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label  className="block text-gray-700" htmlFor="password">Password:</label>
          <input
            className="mt-1 p-2 w-full border rounded"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;