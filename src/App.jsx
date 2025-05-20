import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { Search, ShoppingCart, ChevronDown, Menu, X, Home, Info, Mail, CreditCard, Truck, ShieldCheck } from 'lucide-react';

// Create Routes Components
const About = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Vin2Grow</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Our Story</h3>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Vin2Grow started as a small online boutique with a vision to provide high-quality products at affordable prices. 
            What began as a passion project quickly grew into a trusted e-commerce platform serving customers worldwide.
          </p>
          <p className="text-gray-600">
            Our journey has been defined by our commitment to customer satisfaction, product excellence, and continuous innovation. 
            Today, we proudly offer a diverse range of products across multiple categories, all carefully selected to meet our rigorous standards.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Our Mission</h3>
          <p className="text-gray-600">
            At Vin2Grow, our mission is to transform the online shopping experience by offering curated, high-quality products 
            that enhance our customers' lives. We believe in transparent business practices, sustainable sourcing, 
            and creating lasting relationships with our community of shoppers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-4">
            <div className="bg-purple-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
              <ShieldCheck className="h-8 w-8 text-purple-700" />
            </div>
            <h4 className="font-bold mb-2">Quality Assurance</h4>
            <p className="text-gray-600 text-sm">Every product undergoes rigorous quality checks before making it to our platform.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-purple-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
              <Truck className="h-8 w-8 text-purple-700" />
            </div>
            <h4 className="font-bold mb-2">Fast Delivery</h4>
            <p className="text-gray-600 text-sm">We partner with reliable logistics providers to ensure timely delivery of your orders.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-purple-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
              <CreditCard className="h-8 w-8 text-purple-700" />
            </div>
            <h4 className="font-bold mb-2">Secure Payments</h4>
            <p className="text-gray-600 text-sm">Shop with confidence knowing all transactions are protected with advanced encryption.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Whether you have a question about our products, an order, or anything else, 
              our team is ready to answer all your queries.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-5 w-5 text-purple-700" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@vin2grow.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Home className="h-5 w-5 text-purple-700" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Commerce St, Retail City, RC 10101</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 text-purple-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white font-medium py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductsList = ({ products, filteredProducts, selectedCategory, categories, setSelectedCategory, searchQuery, setSearchQuery, addToCart, showNotification }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="products">
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
                onClick={() => {
                  addToCart(product);
                  showNotification(product.title);
                }}
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
);

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
  const [currentPage, setCurrentPage] = useState('home');
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  
  const carouselItems = [
    { icon: <ShoppingCart className="h-24 w-24" />, color: 'bg-purple-300' },
    { icon: <CreditCard className="h-24 w-24" />, color: 'bg-blue-300' },
    { icon: <Truck className="h-24 w-24" />, color: 'bg-green-300' },
    { icon: <ShieldCheck className="h-24 w-24" />, color: 'bg-red-300' }
  ];
  
  // Carousel animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Show notification function
  const showNotification = (productName) => {
    setNotification({
      show: true,
      message: `${productName} added to cart!`
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        
        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
        
        setIsLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
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

  // Scroll to products section
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

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
      {/* Notification */}
      {notification.show && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-out">
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            <p>{notification.message}</p>
          </div>
        </div>
      )}
      
      {/* Navigation */}
<nav className="bg-purple-700 text-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <h1 className="text-2xl font-bold">Vin2Grow</h1>
        </div>
        <div className="hidden md:block ml-10">
          <div className="flex space-x-4">
            <a 
              href="#" 
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'home' ? 'bg-purple-800' : 'hover:bg-purple-600'}`}
            >
              Home
            </a>
            <a 
              href="#" 
              onClick={()=>scrollToProducts('products')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'products' ? 'bg-purple-800' : 'hover:bg-purple-600'}`}
            >
              Products
            </a>
            <a 
              href="#" 
              onClick={() => setCurrentPage('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'about' ? 'bg-purple-800' : 'hover:bg-purple-600'}`}
            >
              About
            </a>
            <a 
              href="#" 
              onClick={() => setCurrentPage('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'contact' ? 'bg-purple-800' : 'hover:bg-purple-600'}`}
            >
              Contact
            </a>
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
        <a 
          href="#" 
          onClick={() => {
            setCurrentPage('home');
            setMobileMenuOpen(false);
          }}
          className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'home' ? 'bg-purple-800' : 'hover:bg-purple-600'}`}
        >
          Home
        </a>
        <a 
          href="#products" 
          onClick={() => {
            scrollToProducts();
            setMobileMenuOpen(false);
            setCurrentPage('products');
          }}
          className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'products' ? 'bg-purple-800' : 'hover:bg-purple-600'}`}
        >
          Products
        </a>
        <a 
          href="#" 
          onClick={() => {
            setCurrentPage('about');
            setMobileMenuOpen(false);
          }}
          className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'about' ? 'bg-purple-800' : 'hover:bg-purple-600'}`}
        >
          About
        </a>
        <a 
          href="#" 
          onClick={() => {
            setCurrentPage('contact');
            setMobileMenuOpen(false);
          }}
          className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'contact' ? 'bg-purple-800' : 'hover:bg-purple-600'}`}
        >
          Contact
        </a>
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
          onClick={() => {
            setShowCart(!showCart);
            setMobileMenuOpen(false);
          }} 
          className="mt-3 w-full flex items-center justify-center px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          <span>Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
        </button>
      </div>
    </div>
  )}
</nav>

      {/* Content based on current page */}
      {currentPage === 'home' && (
        <>
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
                    <button 
                      onClick={scrollToProducts}
                      className="bg-white text-purple-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
                  {/* Carousel Icons */}
                  <div className="relative h-64 w-64">
                    {carouselItems.map((item, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${item.color} bg-opacity-30 rounded-full
                          ${index === currentCarouselIndex ? 'opacity-100' : 'opacity-0'}`}
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products List */}
          <ProductsList 
            products={products}
            filteredProducts={filteredProducts}
            selectedCategory={selectedCategory}
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            addToCart={addToCart}
            showNotification={showNotification}
          />
        </>
      )}

      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}

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
                                      e.target.src = "/api/placeholder/200/200";
                                    }}
                                  />
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3 className="line-clamp-1">{item.title}</h3>
                                      <p className="ml-4">{(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm">
                                    <div className="flex items-center border rounded-md">
                                      <button 
                                        onClick={() => removeFromCart(item.id)}
                                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                      >
                                        -
                                      </button>
                                      <span className="px-2">{item.quantity}</span>
                                      <button 
                                        onClick={() => addToCart(item)}
                                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                      >
                                        +
                                      </button>
                                    </div>

                                    <button
                                      type="button"
                                      className="font-medium text-purple-600 hover:text-purple-500"
                                      onClick={() => setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))}
                                    >
                                      Remove
                                    </button>
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
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-800"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="text-purple-600 font-medium hover:text-purple-500"
                            onClick={() => setShowCart(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
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
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Vin2Grow</h3>
              <p className="text-gray-400">
                Your one-stop shop for quality products at affordable prices.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#products" onClick={scrollToProducts} className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#" onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Return Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Vin2Grow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}