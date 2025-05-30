import { useState, useEffect } from 'react';
import { ShoppingCart, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import ProductsList from '../components/ProductsList';
import React from 'react';

const Home = ({ 
  products,
  filteredProducts,
  selectedCategory,
  categories,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  addToCart,
  showNotification
}) => {
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
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r bg-black text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Welcome to Vin2Grow
              </h2>
              <p className="mt-3 text-xl">
              Where convenience meets quality - shop smarter, live better.
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
  );
};

export default Home;