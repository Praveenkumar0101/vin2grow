import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Notification = ({ notification }) => {
  if (!notification.show) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-out">
      <div className="flex items-center">
        <ShoppingCart className="h-5 w-5 mr-2" />
        <p>{notification.message}</p>
      </div>
    </div>
  );
};

export default Notification;