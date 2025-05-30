
// import { useState, useEffect } from 'react';
// import { Search, ShoppingCart, ChevronDown, Menu, X, Home, Info, Mail, CreditCard, Truck, ShieldCheck } from 'lucide-react';
// import { fetchProducts } from '../utils/api';
// import Navbar from '../components/Navbar';
// import HomePage from '../pages/Home';
// import About from '../components/About';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';
// import CartSidebar from '../components/CartSidebar';
// import Notification from '../components/Notification';
// import React from 'react';
// import AdminPanel from '../Admin-panel/AdminPanel';




// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [categories, setCategories] = useState(['All']);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [currentPage, setCurrentPage] = useState('home');
//   const [notification, setNotification] = useState({ show: false, message: '' });

//   // Show notification function
//   const showNotification = (productName) => {
//     setNotification({
//       show: true,
//       message: `${productName} added to cart!`
//     });
    
//     // Hide notification after 3 seconds
//     setTimeout(() => {
//       setNotification({ show: false, message: '' });
//     }, 3000);
//   };

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//         setFilteredProducts(data);
        
//         // Extract unique categories
//         const uniqueCategories = ['All', ...new Set(data.map(product => product.category))];
//         setCategories(uniqueCategories);
        
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message || 'Failed to fetch products');
//         setIsLoading(false);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Filter products by category and search term
//   useEffect(() => {
//     let result = products;
    
//     // Filter by category
//     if (selectedCategory !== 'All') {
//       result = result.filter(product => product.category === selectedCategory);
//     }
    
//     // Filter by search term
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       result = result.filter(product => 
//         product.title.toLowerCase().includes(query) || 
//         product.description.toLowerCase().includes(query)
//       );
//     }
    
//     setFilteredProducts(result);
//   }, [selectedCategory, searchQuery, products]);

//   // Add item to cart
//   const addToCart = (product) => {
//     const existingItem = cartItems.find(item => item.id === product.id);
    
//     if (existingItem) {
//       setCartItems(cartItems.map(item => 
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = (productId) => {
//     const existingItem = cartItems.find(item => item.id === productId);
    
//     if (existingItem.quantity === 1) {
//       setCartItems(cartItems.filter(item => item.id !== productId));
//     } else {
//       setCartItems(cartItems.map(item => 
//         item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
//       ));
//     }
//   };

//   // Calculate total price
//   const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

//   const scrollToProducts = () => {
//     document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
//           <p className="mt-4 text-xl font-semibold text-gray-700">Loading products...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-center">
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//             <p className="font-bold">Error</p>
//             <p>{error}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Notification notification={notification} />
      
//       <Navbar 
//         currentPage={currentPage} 
//         setCurrentPage={setCurrentPage}
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//         cartItems={cartItems}
//         setShowCart={setShowCart}
//         scrollToProducts={scrollToProducts}
//       />
      
//       <main>
//         {currentPage === 'home' && (
//           <HomePage 
//             products={products}
//             filteredProducts={filteredProducts}
//             selectedCategory={selectedCategory}
//             categories={categories}
//             setSelectedCategory={setSelectedCategory}
//             searchQuery={searchQuery}
//             setSearchQuery={setSearchQuery}
//             addToCart={addToCart}
//             showNotification={showNotification}
//           />
//         )}
//         {currentPage === 'about' && <About />}
//         {currentPage === 'contact' && <Contact />}
//         {currentPage === 'admin' && <AdminPanel />}
       
//       </main>

//       <Footer 
//         setCurrentPage={setCurrentPage}
//         scrollToProducts={scrollToProducts}
//       />

//       <CartSidebar 
//         showCart={showCart}
//         setShowCart={setShowCart}
//         cartItems={cartItems}
//         addToCart={addToCart}
//         removeFromCart={removeFromCart}
//         totalPrice={totalPrice}
//       />
//      {/* <Navbar /> */}
//     </div>
//   );
// }






// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Navbar from '../Admin-panel/Navbar';

// function App() {
//   return (
   
//       <Navbar />
   
//   );
// }

// export default App;

// Navbar.jsx





// (main appendOffsetOfLegend.js)
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useContext } from 'react';
// import AuthContext, { AuthProvider } from '../context/AuthContext';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import React from 'react';  
// import Navbar from '../Admin-panel/Navbar.jsx';

// // Redirect if logged in
// const AuthRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   return !user ? children : <Navigate to="/register" replace />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route path="/login" element={
//           <AuthRoute>
//             <Login />
//           </AuthRoute>
//         } />

//         <Route path="/register" element={
//           <AuthRoute>
//             <Register />
//           </AuthRoute>
//         } />

//         <Route path="/navbar/*" element={<Navbar />} />

//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
// import Navbar from '../Admin-panel/Navbar';
// //  import Navbar from "../Admin-panel/Navbar";
//  import AdminPanel from "../Admin-panel/AdminPanel";
// import Products from '../Admin-panel/AdminPanel';
// import AdminOrders from '../Admin-panel/AdminOrders';
// import OrderAnalytics from '../Admin-panel/Dashboard';

// function App() {
//   return(
// <div>
//      <Navbar />
//   {/* <AdminPanel />  */}
//    {/* <AdminOrders /> */}
//   {/* <OrderAnalytics /> */}
//     {/* <Routes>
//       <Route path="/dashboard" element={<div>Dashboard Page</div>} />
//       <Route path="../Admin-panel/AdminPanel.jsx" element={<Products />} />
//       <Route path="/orders" element={<div>Orders Page</div>} />
//       <Route path="/customers" element={<div>Customers Page</div>} />
//     </Routes> */}
    
//  </div>
//  )
// };

// export default App;



import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext, { AuthProvider } from '../context/AuthContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import React from 'react';  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Admin-panel/Navbar.jsx';  // Admin
import UserHome from '../pages/UserHome';       // Create this component for regular users
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/unauthorized" replace />;
  return children;
};

function App() {
  return (
    <AuthProvider>
        <ToastContainer />
      <Routes>
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Admin Route */}
        <Route path="/admin/*" element={
          <ProtectedRoute role="admin">
            <Navbar />
          </ProtectedRoute>
        } />

        {/* User Route */}
        <Route path="/user/*" element={
          <ProtectedRoute role="user">
            <UserHome />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
