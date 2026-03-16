import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, Shield, Truck, RefreshCw, Loader } from 'lucide-react';
import { categoryAPI } from '../services/api';
import { useCart } from '../context/CartContext.jsx';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await categoryAPI.getById(id);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product", error);
        // Fallback mock
        setProduct({
          _id: id,
          title: 'Premium Wireless Headphones',
          price: 299,
          description: 'Experience pure sound with our noise-canceling headphones. Crafted for comfort and engineered for excellence, these headphones deliver studio-quality audio directly to your ears.',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000',
          category: { name: 'Electronics' },
          stock: 15
        });
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading-screen"><Loader className="spin" /></div>;
  if (!product) return <div className="container">Product not found</div>;

  return (
    <div className="product-details container">
      <Link to="/products" className="back-link"><ArrowLeft size={18} /> Back to Catalog</Link>
      
      <div className="details-grid">
        <div className="product-gallery">
          <img src={product.image || 'https://via.placeholder.com/600'} alt={product.title} />
        </div>

        <div className="product-main-info">
          <div className="category-badge">{product.category?.name}</div>
          <h1>{product.title}</h1>
          
          <div className="ratings">
            <Star size={16} fill="#f59e0b" color="#f59e0b" />
            <Star size={16} fill="#f59e0b" color="#f59e0b" />
            <Star size={16} fill="#f59e0b" color="#f59e0b" />
            <Star size={16} fill="#f59e0b" color="#f59e0b" />
            <Star size={16} fill="#e2e8f0" color="#e2e8f0" />
            <span>(24 Customer Reviews)</span>
          </div>

          <p className="details-price">${product.price}</p>
          
          <div className="details-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="action-buttons">
            <button onClick={() => addToCart(product)} className="btn btn-primary add-large">
              <ShoppingCart size={22} /> Add to Cart
            </button>
          </div>

          <div className="trust-badges">
            <div className="trust-item"><Truck size={20} /> Free Express Shipping</div>
            <div className="trust-item"><Shield size={20} /> 2-Year Warranty</div>
            <div className="trust-item"><RefreshCw size={20} /> 30-Day Returns</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
