
import React, { useState, useEffect, useContext } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import { CartContext } from '../CartContext/CartContext'; 

const ProductList = (props) => {
  const searchText = props.searchText;
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data); 
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    return p.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className='row mt-5 pt-5'>
      {filteredProducts.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onAddToCartClick={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;