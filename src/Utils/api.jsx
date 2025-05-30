export const fetchProducts = async () => {
  try {
    // const response = await fetch('http://localhost:5000/api/products');
    
     const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message || 'Failed to fetch products');
  }
};