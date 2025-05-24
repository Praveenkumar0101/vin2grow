import React, { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Package, ShoppingCart, Calendar, BarChart3, Activity } from 'lucide-react';

const OrderAnalytics = () => {
  const [orders, setOrders] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [timeRange, setTimeRange] = useState('7days');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API call
    fetch('http://localhost:5000/api/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        processAnalytics(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        // Mock data for demonstration
        const mockOrders = generateMockOrders();
        setOrders(mockOrders);
        processAnalytics(mockOrders);
        setLoading(false);
      });
  }, [timeRange]);

  const generateMockOrders = () => {
    const orders = [];
    const statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    const products = [
      { title: 'Wireless Headphones', basePrice: 59.99 },
      { title: 'Bluetooth Speaker', basePrice: 149.99 },
      { title: 'Gaming Mouse', basePrice: 79.99 },
      { title: 'Keyboard', basePrice: 129.99 },
      { title: 'Phone Case', basePrice: 25.99 },
      { title: 'Laptop Stand', basePrice: 89.99 },
      { title: 'USB Cable', basePrice: 19.99 },
      { title: 'Power Bank', basePrice: 49.99 }
    ];

    for (let i = 0; i < 50; i++) {
      const daysAgo = Math.floor(Math.random() * 30);
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
      
      const numItems = Math.floor(Math.random() * 4) + 1;
      const items = [];
      let total = 0;

      for (let j = 0; j < numItems; j++) {
        const product = products[Math.floor(Math.random() * products.length)];
        const quantity = Math.floor(Math.random() * 3) + 1;
        const price = product.basePrice + (Math.random() * 20 - 10);
        
        items.push({
          title: product.title,
          quantity: quantity,
          price: price
        });
        
        total += price * quantity;
      }

      orders.push({
        _id: `order_${i + 1}`,
        userId: `user_${Math.floor(Math.random() * 20) + 1}`,
        total: total,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        createdAt: date.toISOString(),
        items: items
      });
    }

    return orders.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  };

  const processAnalytics = (ordersData) => {
    // Filter orders based on time range
    const now = new Date();
    const filteredOrders = ordersData.filter(order => {
      const orderDate = new Date(order.createdAt);
      const daysAgo = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24));
      
      switch (timeRange) {
        case '7days': return daysAgo <= 7;
        case '30days': return daysAgo <= 30;
        case '90days': return daysAgo <= 90;
        default: return true;
      }
    });

    // Calculate key metrics
    const totalOrders = filteredOrders.length;
    const totalRevenue = filteredOrders.reduce((sum, order) => sum + order.total, 0);
    const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    const totalItems = filteredOrders.reduce((sum, order) => sum + order.items.length, 0);

    // Group orders by date for time series
    const dailyData = {};
    filteredOrders.forEach(order => {
      const date = new Date(order.createdAt).toISOString().split('T')[0];
      if (!dailyData[date]) {
        dailyData[date] = {
          date: date,
          orders: 0,
          revenue: 0,
          items: 0
        };
      }
      dailyData[date].orders += 1;
      dailyData[date].revenue += order.total;
      dailyData[date].items += order.items.length;
    });

    const timeSeriesData = Object.values(dailyData).map(day => ({
      ...day,
      avgOrder: day.orders > 0 ? day.revenue / day.orders : 0,
      formattedDate: new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }));



    setAnalytics({
      totalOrders,
      totalRevenue,
      avgOrderValue,
      totalItems,
      timeSeriesData
    });
  };

  const formatNumber = (amount) => {
    return amount.toFixed(2);
  };

  const COLORS = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6 w-64"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 h-32 rounded-lg"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 h-80 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Analytics</h1>
            <p className="text-gray-600">Track your business performance and trends</p>
          </div>
          
          {/* Time Range Selector */}
          <div className="mt-4 sm:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="all">All Time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.totalOrders?.toLocaleString()}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-green-600">{formatNumber(analytics.totalRevenue || 0)}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Order Value</p>
              <p className="text-3xl font-bold text-purple-600">{formatNumber(analytics.avgOrderValue || 0)}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Items</p>
              <p className="text-3xl font-bold text-orange-600">{analytics.totalItems?.toLocaleString()}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Revenue Over Time</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analytics.timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="formattedDate" />
              <YAxis tickFormatter={(value) => value.toFixed(0)} />
              <Tooltip formatter={(value) => [formatNumber(value), 'Revenue']} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Daily Orders</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="formattedDate" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Average Order Value Trend */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-5 h-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Average Order Value & Items Trend</h3>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={analytics.timeSeriesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="formattedDate" />
            <YAxis yAxisId="left" tickFormatter={(value) => `$${value.toFixed(0)}`} />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip 
              formatter={(value, name) => [
                name === 'avgOrder' ? formatCurrency(value) : value.toFixed(0),
                name === 'avgOrder' ? 'Avg Order Value' : 'Items Count'
              ]}
            />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="avgOrder" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Avg Order Value"
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="items" 
              stroke="#EC4899" 
              strokeWidth={2}
              name="Items Count"
              dot={{ fill: '#EC4899', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderAnalytics;