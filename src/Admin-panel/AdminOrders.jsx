

// import React, { useEffect, useState } from 'react';
// import { Package, User, Calendar, DollarSign, Search, Filter, Eye, ChevronDown, ChevronUp } from 'lucide-react';

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('date');
//   const [sortOrder, setSortOrder] = useState('desc');
//   const [expandedOrder, setExpandedOrder] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Replace this with your actual API call
//     // Example: axios.get('http://localhost:5000/api/orders')
//     fetch('http://localhost:5000/api/orders')
//       .then(res => res.json())
//       .then(data => {
//         setOrders(data);
//         setFilteredOrders(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//         // Mock data for demonstration
//         const mockOrders = [
//           {
//             _id: '507f1f77bcf86cd799439011',
//             userId: 'user123',
//             total: 89.99,
//             status: 'delivered',
//             createdAt: '2024-12-15T10:30:00Z',
//             items: [
//               { title: 'Wireless Headphones', quantity: 1, price: 59.99 },
//               { title: 'Phone Case', quantity: 2, price: 15.00 }
//             ]
//           },
//           {
//             _id: '507f1f77bcf86cd799439012',
//             userId: 'user456',
//             total: 149.99,
//             status: 'processing',
//             createdAt: '2024-12-14T15:45:00Z',
//             items: [
//               { title: 'Bluetooth Speaker', quantity: 1, price: 149.99 }
//             ]
//           },
//           {
//             _id: '507f1f77bcf86cd799439013',
//             userId: 'user789',
//             total: 234.50,
//             status: 'shipped',
//             createdAt: '2024-12-13T09:20:00Z',
//             items: [
//               { title: 'Gaming Mouse', quantity: 1, price: 79.99 },
//               { title: 'Keyboard', quantity: 1, price: 129.99 },
//               { title: 'Mouse Pad', quantity: 1, price: 24.52 }
//             ]
//           }
//         ];
//         setOrders(mockOrders);
//         setFilteredOrders(mockOrders);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     let filtered = orders.filter(order => 
//       order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       order.userId.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (statusFilter !== 'all') {
//       filtered = filtered.filter(order => order.status === statusFilter);
//     }

//     // Sort orders
//     filtered.sort((a, b) => {
//       let aValue, bValue;
      
//       switch (sortBy) {
//         case 'date':
//           aValue = new Date(a.createdAt);
//           bValue = new Date(b.createdAt);
//           break;
//         case 'total':
//           aValue = a.total;
//           bValue = b.total;
//           break;
//         case 'orderId':
//           aValue = a._id;
//           bValue = b._id;
//           break;
//         default:
//           aValue = new Date(a.createdAt);
//           bValue = new Date(b.createdAt);
//       }

//       if (sortOrder === 'asc') {
//         return aValue > bValue ? 1 : -1;
//       } else {
//         return aValue < bValue ? 1 : -1;
//       }
//     });

//     setFilteredOrders(filtered);
//   }, [orders, searchTerm, statusFilter, sortBy, sortOrder]);

//   const getStatusColor = (status) => {
//     switch (status?.toLowerCase()) {
//       case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
//       case 'processing': return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'shipped': return 'bg-purple-100 text-purple-800 border-purple-200';
//       case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
//       case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
//       default: return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const toggleOrderExpansion = (orderId) => {
//     setExpandedOrder(expandedOrder === orderId ? null : orderId);
//   };

//   if (loading) {
//     return (
//       <div className="p-8 max-w-7xl mx-auto">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded mb-6 w-48"></div>
//           {[...Array(5)].map((_, i) => (
//             <div key={i} className="bg-gray-100 h-24 rounded-lg mb-4"></div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Management</h1>
//         <p className="text-gray-600">Manage and track all customer orders</p>
//       </div>

//       {/* Filters and Search */}
//       <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search orders..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           {/* Status Filter */}
//           <div className="relative">
//             <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
//             >
//               <option value="all">All Status</option>
//               <option value="pending">Pending</option>
//               <option value="processing">Processing</option>
//               <option value="shipped">Shipped</option>
//               <option value="delivered">Delivered</option>
//               <option value="cancelled">Cancelled</option>
//             </select>
//           </div>

//           {/* Sort By */}
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           >
//             <option value="date">Sort by Date</option>
//             <option value="total">Sort by Total</option>
//             <option value="orderId">Sort by Order ID</option>
//           </select>

//           {/* Sort Order */}
//           <button
//             onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
//             className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
//           >
//             {sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//             {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
//           </button>
//         </div>
//       </div>

//       {/* Orders Count */}
//       <div className="mb-4">
//         <p className="text-sm text-gray-600">
//           Showing {filteredOrders.length} of {orders.length} orders
//         </p>
//       </div>

//       {/* Orders List */}
//       <div className="space-y-4">
//         {filteredOrders.length === 0 ? (
//           <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
//             <Package className="mx-auto w-12 h-12 text-gray-400 mb-4" />
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
//             <p className="text-gray-600">Try adjusting your search or filter criteria</p>
//           </div>
//         ) : (
//           filteredOrders.map((order) => (
//             <div key={order._id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
//               {/* Order Header */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-blue-100 p-2 rounded-lg">
//                       <Package className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900">Order #{order._id.slice(-8)}</h3>
//                       <p className="text-sm text-gray-600">Full ID: {order._id}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status || 'pending')}`}>
//                       {(order.status || 'pending').charAt(0).toUpperCase() + (order.status || 'pending').slice(1)}
//                     </span>
//                     <button
//                       onClick={() => toggleOrderExpansion(order._id)}
//                       className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                     >
//                       <Eye className="w-4 h-4 text-gray-600" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="flex items-center space-x-3">
//                     <User className="w-4 h-4 text-gray-400" />
//                     <div>
//                       <p className="text-sm text-gray-600">Customer</p>
//                       <p className="font-medium text-gray-900">{order.userId}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-3">
//                     <DollarSign className="w-4 h-4 text-gray-400" />
//                     <div>
//                       <p className="text-sm text-gray-600">Total Amount</p>
//                       <p className="font-bold text-green-600">{order.total.toFixed(2)}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-3">
//                     <Calendar className="w-4 h-4 text-gray-400" />
//                     <div>
//                       <p className="text-sm text-gray-600">Order Date</p>
//                       <p className="font-medium text-gray-900">{formatDate(order.createdAt)}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Quick Items Summary */}
//                 <div className="mt-4 pt-4 border-t border-gray-100">
//                   <p className="text-sm text-gray-600 mb-2">
//                     {order.items.length} item{order.items.length !== 1 ? 's' : ''}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {order.items.slice(0, 3).map((item, idx) => (
//                       <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
//                         {item.title} × {item.quantity}
//                       </span>
//                     ))}
//                     {order.items.length > 3 && (
//                       <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
//                         +{order.items.length - 3} more
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Expanded Order Details */}
//               {expandedOrder === order._id && (
//                 <div className="border-t border-gray-100 p-6 bg-gray-50">
//                   <h4 className="font-semibold text-gray-900 mb-4">Order Items</h4>
//                   <div className="space-y-3">
//                     {order.items.map((item, idx) => (
//                       <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border">
//                         <div className="flex-1">
//                           <h5 className="font-medium text-gray-900">{item.title}</h5>
//                           <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                         </div>
//                         <div className="text-right">
//                           <p className="font-semibold text-gray-900">{(item.price * item.quantity).toFixed(2)}</p>
//                           <p className="text-sm text-gray-600">{item.price.toFixed(2)} each</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
//                     <span className="font-semibold text-lg text-gray-900">Total:</span>
//                     <span className="font-bold text-xl text-green-600">{order.total.toFixed(2)}</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Summary Stats */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
//           <h3 className="text-2xl font-bold text-gray-900">{orders.length}</h3>
//           <p className="text-sm text-gray-600">Total Orders</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
//           <h3 className="text-2xl font-bold text-green-600">
//             {orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
//           </h3>
//           <p className="text-sm text-gray-600">Total Revenue</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
//           <h3 className="text-2xl font-bold text-blue-600">
//             {orders.length > 0 ? (orders.reduce((sum, order) => sum + order.total, 0) / orders.length).toFixed(2) : '0.00'}
//           </h3>
//           <p className="text-sm text-gray-600">Average Order</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
//           <h3 className="text-2xl font-bold text-purple-600">
//             {orders.reduce((sum, order) => sum + order.items.length, 0)}
//           </h3>
//           <p className="text-sm text-gray-600">Total Items</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminOrders;



import React, { useEffect, useState } from 'react';
import { Package, User, Calendar, DollarSign, Search, Filter, ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data fetch
    setTimeout(() => {
      const mockOrders = [
        {
          _id: '507f1f77bcf86cd799439011',
          userId: 'user123',
          total: 89.99,
          status: 'delivered',
          createdAt: '2024-12-15T10:30:00Z',
          items: [
            { title: 'Wireless Headphones', quantity: 1, price: 59.99 },
            { title: 'Phone Case', quantity: 2, price: 15.00 }
          ]
        },
        {
          _id: '507f1f77bcf86cd799439012',
          userId: 'user456',
          total: 149.99,
          status: 'processing',
          createdAt: '2024-12-14T15:45:00Z',
          items: [
            { title: 'Bluetooth Speaker', quantity: 1, price: 149.99 }
          ]
        },
        {
          _id: '507f1f77bcf86cd799439013',
          userId: 'user789',
          total: 234.50,
          status: 'shipped',
          createdAt: '2024-12-13T09:20:00Z',
          items: [
            { title: 'Gaming Mouse', quantity: 1, price: 79.99 },
            { title: 'Keyboard', quantity: 1, price: 129.99 },
            { title: 'Mouse Pad', quantity: 1, price: 24.52 }
          ]
        }
      ];
      setOrders(mockOrders);
      setFilteredOrders(mockOrders);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = orders.filter(order => 
      order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.userId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
          break;
        case 'total':
          aValue = a.total;
          bValue = b.total;
          break;
        case 'orderId':
          aValue = a._id;
          bValue = b._id;
          break;
        default:
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
      }

      return sortOrder === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });

    setFilteredOrders(filtered);
  }, [orders, searchTerm, statusFilter, sortBy, sortOrder]);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const toggleOrderExpansion = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-48"></div>
          <div className="h-12 bg-gray-200 rounded-lg"></div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-9xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Order Management</h1>
        <p className="text-gray-600">View and manage customer orders</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="date">Sort by Date</option>
            <option value="total">Sort by Total</option>
            <option value="orderId">Sort by Order ID</option>
          </select>

          {/* Sort Order */}
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
          >
            {sortOrder === 'asc' ? (
              <ChevronUp className="h-4 w-4 mr-1" />
            ) : (
              <ChevronDown className="h-4 w-4 mr-1" />
            )}
            {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
      </div>

      {/* Orders Count */}
      <div className="mb-3 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">{filteredOrders.length}</span> of{' '}
          <span className="font-medium">{orders.length}</span> orders
        </p>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {filteredOrders.length === 0 ? (
          <div className="p-12 text-center">
            <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Order
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <React.Fragment key={order._id}>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Package className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">#{order._id.slice(-8)}</div>
                            <div className="text-xs text-gray-500">ID: {order._id.slice(0, 8)}...</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.userId}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{formatDate(order.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm font-bold text-green-600">${order.total.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-gray-900">
                          {order.items.reduce((sum, item) => sum + item.quantity, 0)} items
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => toggleOrderExpansion(order._id)}
                          className="text-blue-600 hover:text-blue-800 flex items-center justify-end w-full"
                        >
                          {expandedOrder === order._id ? (
                            <>
                              Hide <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              View <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                    {expandedOrder === order._id && (
                      <tr>
                        <td colSpan="7" className="px-6 py-4 bg-gray-50">
                          <div className="border-t border-gray-200 pt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Order Details</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <h5 className="text-xs font-medium text-blue-800 uppercase tracking-wider mb-1">Customer</h5>
                                <p className="text-sm text-gray-900">{order.userId}</p>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg">
                                <h5 className="text-xs font-medium text-green-800 uppercase tracking-wider mb-1">Order Date</h5>
                                <p className="text-sm text-gray-900">
                                  {new Date(order.createdAt).toLocaleString()}
                                </p>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <h5 className="text-xs font-medium text-purple-800 uppercase tracking-wider mb-1">Status</h5>
                                <p className="text-sm text-gray-900 capitalize">{order.status}</p>
                              </div>
                            </div>
                            
                            <h5 className="font-medium text-gray-900 mb-2">Items</h5>
                            <div className="overflow-hidden border border-gray-200 rounded-lg">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                  <tr>
                                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Product
                                    </th>
                                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Quantity
                                    </th>
                                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Price
                                    </th>
                                    <th scope="col" className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Total
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {order.items.map((item, idx) => (
                                    <tr key={idx}>
                                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {item.title}
                                      </td>
                                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                        {item.quantity}
                                      </td>
                                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                        ${item.price.toFixed(2)}
                                      </td>
                                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-right text-gray-900">
                                        ${(item.price * item.quantity).toFixed(2)}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="mt-4 flex justify-end">
                              <div className="bg-gray-50 p-4 rounded-lg w-full md:w-1/3">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm font-medium text-gray-600">Subtotal:</span>
                                  <span className="text-sm text-gray-900">${order.total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm font-medium text-gray-600">Shipping:</span>
                                  <span className="text-sm text-gray-900">$0.00</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                                  <span className="text-base font-bold text-gray-900">Total:</span>
                                  <span className="text-lg font-bold text-green-600">${order.total.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;