
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import './ProductCard.css';
import { CartContext } from '../CartContext/CartContext'; 

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const onClick = () => {
    console.log('Adding to cart:', product); 
    addToCart(product);
  };

  return (
    <div className='product-card'>
      <Link className='text-decoration-none' to={`/Products/${product.id}`}>
        <img src={product.image} className="product-image" alt={product.title} style={{ height: '300px', width: '300px' }} />
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <p className="product-category">{product.category}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </Link>
      <button className="btn btn-outline-danger" onClick={onClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;