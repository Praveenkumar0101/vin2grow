import { useState } from 'react';
import React from 'react';
import { Search, ShoppingCart, Menu, X, Home, Info, Mail } from 'lucide-react';

const Navbar = ({ 
  currentPage, 
  setCurrentPage, 
  searchQuery, 
  setSearchQuery, 
  cartItems, 
  setShowCart,
  scrollToProducts
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-fuchsia-500 text-black shadow-lg ">
      <div className="max-w-7xl mx-auto h-17 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
               <div className="flex-shrink-0 mr-4">
            <img 
              src="../../public/vin2grow-removebg-preview.png" 
              alt="Vin2Grow Logo" 
              className="h-25 w-25 ml-2 mt-2"
            />
            </div>
              <h1 className="text-2xl font-bold ml-10">Vin2Grow</h1>
            </div>

  



            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  onClick={() => setCurrentPage('home')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'home' ? 'bg-white' : 'hover:bg-white'}`}
                >
                  Home
                </a>
                <a 
                  href="#" 
                  onClick={() => scrollToProducts('products')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'products' ? 'bg-white' : 'hover:bg-white'}`}
                >
                  Products
                </a>
                <a 
                  href="#" 
                  onClick={() => setCurrentPage('about')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'about' ? 'bg-white' : 'hover:bg-white'}`}
                >
                  About
                </a>
                <a 
                  href="#" 
                  onClick={() => setCurrentPage('contact')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'contact' ? 'bg-white' : 'hover:bg-white'}`}
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
                className="rounded-full pl-10 pr-4 py-2 bg-white text-black placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-purple-300" />
            </div>
            <button 
              onClick={() => setShowCart(true)} 
              className="ml-4 relative p-2 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white"
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
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
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
                setShowCart(true);
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
  );
};

export default Navbar;