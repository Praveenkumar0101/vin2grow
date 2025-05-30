






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
         <Route path="/userhome" element={<UserHome />} />
         {/* <Route path="/userhome" element={<Navbar />} /> */}

        {/* Admin Route */}
        {/* <Route path="/admin/*" element={
          <ProtectedRoute role="admin">
            <Navbar />
          </ProtectedRoute>
        } /> */}

        {/* User Route */}
        {/* <Route path="/user/*" element={
          <ProtectedRoute role="user">
            <UserHome />
          </ProtectedRoute>
        } /> */}

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
