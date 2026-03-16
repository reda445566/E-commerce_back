import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={product.image || 'https://via.placeholder.com/300'} alt={product.title} />
        <div className="product-overlay">
          <button onClick={() => addToCart(product)} className="overlay-btn" title="Add to Cart">
            <ShoppingCart size={20} />
          </button>
          <Link to={`/products/${product._id}`} className="overlay-btn" title="View Details">
            <Eye size={20} />
          </Link>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-category">{product.category?.name || 'Category'}</p>
        <div className="product-footer">
          <p className="price">${product.price}</p>
          <button onClick={() => addToCart(product)} className="btn-add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
