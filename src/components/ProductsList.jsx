// import { Search } from 'lucide-react';

// import React from 'react';

// const ProductsList = ({ 
//   products, 
//   filteredProducts, 
//   selectedCategory, 
//   categories, 
//   setSelectedCategory, 
//   searchQuery, 
//   setSearchQuery, 
//   addToCart, 
//   showNotification 
// }) => (
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="products">
//     {/* Category Filter */}
//     <div className="mb-8">
//       <h3 className="text-lg font-semibold mb-4">Filter by Category:</h3>
//       <div className="flex flex-wrap gap-2">
//         {categories.map(category => (
//           <button 
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 rounded-full ${
//               selectedCategory === category
//                 ? 'bg-purple-700 text-white'
//                 : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>

//     {/* Products Grid */}
//     <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {filteredProducts.map(product => (
//         <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
//           <div className="h-48 bg-gray-200 p-4 flex items-center justify-center">
//             <img 
//               src={product.image} 
//               alt={product.title} 
//               className="h-full object-contain"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "/api/placeholder/200/200";
//               }}
//             />
//           </div>
//           <div className="p-4">
//             <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full mb-2">
//               {product.category}
//             </span>
//             <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.title}</h3>
//             <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
//             <div className="flex items-center justify-between">
//               <span className="font-bold text-xl">{product.price.toFixed(2)}</span>
//               <button 
//                 onClick={() => {
//                   addToCart(product);
//                   showNotification(product.title);
//                 }}
//                className="bg-purple-700 text-white text-sm px-2 py-1 rounded hover:bg-purple-600 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* Empty state */}
//     {filteredProducts.length === 0 && (
//       <div className="text-center py-12">
//         <div className="mx-auto h-24 w-24 text-gray-400">
//           <Search className="h-full w-full" />
//         </div>
//         <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
//         <p className="mt-1 text-gray-500">
//           Try adjusting your search or filter to find what you're looking for.
//         </p>
//         <div className="mt-6">
//           <button
//             onClick={() => {
//               setSelectedCategory('All');
//               setSearchQuery('');
//             }}
//             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-700 hover:bg-purple-800"
//           >
//             Clear filters
//           </button>
//         </div>
//       </div>
//     )}
//   </div>
// );

// export default ProductsList;





import { Search, Filter, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

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
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Extended categories - you can customize this list based on your API data
  const extendedCategories = [
    'All',
    'Electronics',
    'Fashion',
    'Home & Garden', 
    'Sports & Outdoors',
    'Health & Beauty',
    'Books & Media',
    'Toys & Games',
    'Automotive',
    'Food & Beverages',
    'Pet Supplies',
    'Office Supplies',
    'Jewelry & Accessories',
    'Baby & Kids',
    ...categories.filter(cat => !['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports & Outdoors', 'Health & Beauty', 'Books & Media', 'Toys & Games', 'Automotive', 'Food & Beverages', 'Pet Supplies', 'Office Supplies', 'Jewelry & Accessories', 'Baby & Kids'].includes(cat))
  ];

  const uniqueCategories = [...new Set(extendedCategories)];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="products">
      <div className="flex">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
          >
            <Menu className="h-5 w-5 mr-2" />
            Filters & Categories
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <div className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-xl 
          transition-transform duration-300 ease-in-out overflow-y-auto lg:mr-8 lg:w-64
        `}>
          <div className="p-6">
            {/* Mobile Close Button */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-purple-600" />
                Categories
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {uniqueCategories.map(category => {
                  const categoryCount = category === 'All' 
                    ? products.length 
                    : products.filter(p => p.category === category).length;
                  
                  return (
                    <button 
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        selectedCategory === category
                          ? 'bg-purple-100 text-purple-800 border border-purple-200 shadow-sm'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                      }`}
                    >
                      <span className="font-medium">{category}</span>
                      {categoryCount > 0 && (
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category
                            ? 'bg-purple-200 text-purple-700'
                            : 'bg-gray-200 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'
                        }`}>
                          {categoryCount}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search in Sidebar */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Search Products</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSidebarOpen(false);
              }}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h2>
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            
            {/* Mobile Filter Button - Only visible on small screens */}
            <div className="lg:hidden mt-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Legacy Category Filter (Hidden on larger screens) */}
          <div className="mb-8 lg:hidden">
            <h3 className="text-lg font-semibold mb-4">Quick Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map(category => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
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
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="h-48 bg-gray-200 p-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
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
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-purple-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xl text-purple-600">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => {
                        addToCart(product);
                        showNotification(product.title);
                      }}
                      className="bg-purple-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-200 transform hover:scale-105 font-medium"
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
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-700 hover:bg-purple-800 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;