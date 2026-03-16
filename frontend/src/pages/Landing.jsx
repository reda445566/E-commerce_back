import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Truck, ShieldCheck, Clock } from 'lucide-react';
import { categoryAPI } from '../services/api';
import './Landing.css';

const Landing = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts] = useState([
    { _id: '1', title: 'Premium Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400' },
    { _id: '2', title: 'Luxury Watch', price: 550, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400' },
    { _id: '3', title: 'Smart Backpack', price: 120, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400' },
    { _id: '4', title: 'Wireless Speaker', price: 199, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=400' }
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoryAPI.getAll();
        setCategories(res.data.data || res.data); // Handle different response structures
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge">New Summer Collection 2026</span>
            <h1>Redefine Your <span>Lifestyle</span> With Luxury</h1>
            <p>Experience the perfect blend of style, comfort, and innovation with our curated premium collection.</p>
            <div className="hero-btns">
              <Link to="/products" className="btn btn-primary">
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link to="/products" className="btn btn-outline">Explore Categories</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000" alt="Luxury Store" />
            <div className="floating-card">
              <ShoppingBag className="icon" />
              <div>
                <h4>Best Seller</h4>
                <p>Top Rated in 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <div className="feature-item">
          <Truck />
          <div>
            <h3>Free Shipping</h3>
            <p>On all orders over $100</p>
          </div>
        </div>
        <div className="feature-item">
          <ShieldCheck />
          <div>
            <h3>Secure Payment</h3>
            <p>100% secure payment methods</p>
          </div>
        </div>
        <div className="feature-item">
          <Clock />
          <div>
            <h3>24/7 Support</h3>
            <p>Dedicated support team</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products">View All <ArrowRight size={18} /></Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <div key={product._id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.image || 'https://via.placeholder.com/300'} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <Link to={`/products/${product._id}`} className="btn-view">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-store container">
        <div className="about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1441984969813-91c70513e273?q=80&w=800" alt="Craftsmanship" />
          </div>
          <div className="about-text">
            <h2>Crafted With <span>Purpose</span></h2>
            <p>Since 2020, we've been dedicated to bringing you products that aren't just things, but experiences. Every item in our store is handpicked for its quality, sustainability, and design excellence.</p>
            <ul>
              <li>High-quality materials sourced ethically</li>
              <li>Meticulous attention to every detail</li>
              <li>Innovative designs for modern living</li>
            </ul>
            <Link to="/about" className="btn btn-outline">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta container">
        <div className="cta-content">
          <h2>Join Our Premium Community</h2>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="cta-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
