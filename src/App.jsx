import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Search, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';


export default function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        
        const data = response.data;
        setProducts(data);
        setFilteredProducts(data);
        
        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
        
        setIsLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch products');
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category and search term
  useEffect(() => {
    let result = products;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, products]);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== productId));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
       {/* Navigation  */}
      <nav className="bg-purple-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold">Vin2Grow</h1>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-purple-800">Home</a>
                  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600">Products</a>
                  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600">About</a>
                  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600">Contact</a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="rounded-full pl-10 pr-4 py-2 bg-purple-600 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-purple-300" />
              </div>
              <button 
                onClick={() => setShowCart(!showCart)} 
                className="ml-4 relative p-1 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-purple-800">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">Products</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">About</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">Contact</a>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-full pl-10 pr-4 py-2 bg-purple-600 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-purple-300" />
              </div>
              <button 
                onClick={() => setShowCart(!showCart)} 
                className="mt-3 w-full flex items-center justify-center px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Welcome to Vin2Grow
              </h2>
              <p className="mt-3 text-xl">
                Your destination for amazing products at incredible prices.
              </p>
              <div className="mt-8">
                <button className="bg-white text-purple-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
              <div className="h-64 w-64 bg-purple-300 bg-opacity-30 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-24 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Filter by Category:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-purple-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-gray-200 p-4 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/200/200";
                  }}
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full mb-2">
                  {product.category}
                </span>
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl">{product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-purple-700 text-white px-3 py-1 rounded hover:bg-purple-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400">
              <Search className="h-full w-full" />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-700 hover:bg-purple-800"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShowCart(false)}></div>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                      <button
                        type="button"
                        className="-mr-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setShowCart(false)}
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="mt-8">
                      {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                          <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
                          <h3 className="mt-2 text-base font-medium text-gray-900">Your cart is empty</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Start adding some products to your cart!
                          </p>
                        </div>
                      ) : (
                        <div className="flow-root">
                          <ul className="divide-y divide-gray-200">
                            {cartItems.map((item) => (
                              <li key={item.id} className="py-6 flex">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = "/api/placeholder/100/100";
                                    }}
                                  />
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3 className="line-clamp-1">
                                        {item.title}
                                      </h3>
                                      <p className="ml-4">{(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.category}</p>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm">
                                    <div className="flex items-center">
                                      <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="font-medium text-purple-700 hover:text-purple-500 p-1"
                                      >
                                        -
                                      </button>
                                      <span className="mx-2 text-gray-700">{item.quantity}</span>
                                      <button
                                        onClick={() => addToCart(item)}
                                        className="font-medium text-purple-700 hover:text-purple-500 p-1"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{totalPrice.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <button className="w-full bg-purple-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-purple-800">
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="text-purple-700 font-medium hover:text-purple-500"
                            onClick={() => setShowCart(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Vin2Grow</h3>
              <p className="text-gray-400">
                Your destination for amazing products at incredible prices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                123 Commerce St<br />
                Retail City, RC 10101<br />
                <a href="mailto:info@vin2grow.com" className="hover:text-white">info@vin2grow.com</a><br />
                <a href="tel:+15551234567" className="hover:text-white">(555) 123-4567</a>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Vin2Grow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}