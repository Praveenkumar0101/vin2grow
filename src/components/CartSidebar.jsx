// import { X, ShoppingCart } from 'lucide-react';       





// import React from 'react';

// const CartSidebar = ({ 
//   showCart, 
//   setShowCart, 
//   cartItems, 
//   addToCart, 
//   removeFromCart, 
//   totalPrice 
// }) => {
//   if (!showCart) return null;



// const handleCheckout = async () => {
//   const order = {
//     userId: 'guest', // or use actual logged-in user ID
//     items: cartItems,
//     total: totalPrice
//   };

//   try {
//     await axios.post('http://localhost:5000/api/orders', order);
//     alert('Order placed successfully!');
//     setCartItems([]);
//     setShowCart(false);
//   } catch (err) {
//     console.error(err);
//     alert('Failed to place order.');
//   }
// };


//   return (
//     <div className="fixed inset-0 overflow-hidden z-50">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShowCart(false)}></div>
//         <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
//           <div className="w-screen max-w-md">
//             <div className="h-full flex flex-col bg-white shadow-xl">
//               <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
//                 <div className="flex items-start justify-between">
//                   <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
//                   <button
//                     type="button"
//                     className="-mr-2 p-2 text-gray-400 hover:text-gray-500"
//                     onClick={() => setShowCart(false)}
//                   >
//                     <X className="h-6 w-6" />
//                   </button>
//                 </div>

//                 <div className="mt-8">
//                   {cartItems.length === 0 ? (
//                     <div className="text-center py-12">
//                       <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
//                       <h3 className="mt-2 text-base font-medium text-gray-900">Your cart is empty</h3>
//                       <p className="mt-1 text-sm text-gray-500">
//                         Start adding some products to your cart!
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="flow-root">
//                       <ul className="divide-y divide-gray-200">
//                         {cartItems.map((item) => (
//                           <li key={item.id} className="py-6 flex">
//                             <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                               <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="h-full w-full object-contain"
//                                 onError={(e) => {
//                                   e.target.onerror = null;
//                                   e.target.src = "/api/placeholder/200/200";
//                                 }}
//                               />
//                             </div>

//                             <div className="ml-4 flex-1 flex flex-col">
//                               <div>
//                                 <div className="flex justify-between text-base font-medium text-gray-900">
//                                   <h3 className="line-clamp-1">{item.title}</h3>
//                                   <p className="ml-4">{(item.price * item.quantity).toFixed(2)}</p>
//                                 </div>
//                                 <p className="mt-1 text-sm text-gray-500">{item.category}</p>
//                               </div>
//                               <div className="flex-1 flex items-end justify-between text-sm">
//                                 <div className="flex items-center border rounded-md">
//                                   <button 
//                                     onClick={() => removeFromCart(item.id)}
//                                     className="px-2 py-1 text-gray-600 hover:bg-gray-100"
//                                   >
//                                     -
//                                   </button>
//                                   <span className="px-2">{item.quantity}</span>
//                                   <button 
//                                     onClick={() => addToCart(item)}
//                                     className="px-2 py-1 text-gray-600 hover:bg-gray-100"
//                                   >
//                                     +
//                                   </button>
//                                 </div>

//                                 <button
//                                   type="button"
//                                   className="font-medium text-purple-600 hover:text-purple-500"
//                                   onClick={() => setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))}
//                                 >
//                                   Remove
//                                 </button>
//                               </div>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {cartItems.length > 0 && (
//                 <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
//                   <div className="flex justify-between text-base font-medium text-gray-900">
//                     <p>Subtotal</p>
//                     <p>{totalPrice.toFixed(2)}</p>
//                   </div>
//                   <p className="mt-0.5 text-sm text-gray-500">
//                     Shipping and taxes calculated at checkout.
//                   </p>
//                   <div className="mt-6">
//                     <button
//                       className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-800"
//                       onClick={handleCheckout}>
//                       Checkout
//                     </button>
//                   </div>
//                   <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
//                     <p>
//                       or{' '}
//                       <button
//                         type="button"
//                         className="text-purple-600 font-medium hover:text-purple-500"
//                         onClick={() => setShowCart(false)}
//                       >
//                         Continue Shopping<span aria-hidden="true"> &rarr;</span>
//                       </button>
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartSidebar;




import React from "react";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const CartSidebar = ({ cartItems, setCartItems, showCart, setShowCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (productId) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
  };

  const handleCheckout = async () => {
    const order = {
      userId: "guest", // Replace with actual user ID if available
      items: cartItems,
      total: totalPrice,
    };

    try {
      await axios.post("http://localhost:5000/api/orders", order);
      alert("Order placed successfully!");
      setCartItems([]);
      setShowCart(false);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        showCart ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <XMarkIcon
            className="h-6 w-6 text-gray-500 cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="p-4 overflow-y-auto flex-grow">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <TrashIcon
                    className="h-5 w-5 text-red-500 cursor-pointer"
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </div>
              ))
            )}
          </div>

           {cartItems.length > 0 && (
    <div className="p-4 border-t bg-white sticky bottom-0 z-10">
      <div className="flex justify-between mb-4">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
      </div>
      <button
        className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-800"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  )}
                 </div>
      </div>
    </div>
  );
};

export default CartSidebar;
