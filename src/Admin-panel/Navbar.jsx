// Navbar.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import OrderAnalytics from './Dashboard';
import Products from './AdminPanel';
import AdminOrders from './AdminOrders';

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-end">
            <div className="flex space-x-8">
              <Link 
                to="/dashboard" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium transition duration-300"
              >
                Dashboard
              </Link>
              <Link 
                to="/products" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium transition duration-300"
              >
                Products
              </Link>
              <Link 
                to="/orders" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium transition duration-300"
              >
                Orders
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<OrderAnalytics/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<AdminOrders />} />
      </Routes>
    </>
  );
}

export default Navbar;