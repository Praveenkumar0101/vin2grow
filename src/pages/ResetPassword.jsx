import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ import useNavigate

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate(); // ✅ initialize the hook

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { 
        newPassword: password,
      });
      setMessage(res.data.message);
      setError('');

      // ✅ Navigate to login after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000); // optional delay to show the success message

    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 shadow rounded">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Reset Password</h2>
        {message && <div className="mb-4 text-green-700 bg-green-100 p-2 rounded">{message}</div>}
        {error && <div className="mb-4 text-red-700 bg-red-100 p-2 rounded">{error}</div>}
        <form onSubmit={handleReset}>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">Confirm Password</label>
          <input
            type="password"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
