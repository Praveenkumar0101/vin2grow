import { Search } from 'lucide-react';
import React from 'react';

const ProductsList = ({ 
  products, 
  filteredProducts, 
  selectedCategory, 
  categories, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery, 
  addToCart, 
  showNotification 
}) => (
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
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
               className="bg-purple-700 text-white text-sm px-2 py-1 rounded hover:bg-purple-600 transition"
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

export default ProductsList;