import React, { useState } from 'react';
import axios from 'axios';
import { sendResetEmail } from '../utils/emailService'; // Assuming you have a utility to send emails

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault(); // 👈 Prevent the form from refreshing the page

  try {
    const res = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
    const token = res.data.token;
    await sendResetEmail(email, token); // Send the reset email
    setMessage('Reset email sent!');
    setError('');
  } catch (err) {
    console.error(err);
    setError('Something went wrong.');
    setMessage('');
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 shadow rounded">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Forgot Password</h2>
        {message && <div className="mb-4 text-green-700 bg-green-100 p-2 rounded">{message}</div>}
        {error && <div className="mb-4 text-red-700 bg-red-100 p-2 rounded">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email</label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
