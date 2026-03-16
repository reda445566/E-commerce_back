import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section about">
          <Link to="/" className="logo">
            PR<span>EM</span>IUM
          </Link>
          <p>
            The ultimate destination for luxury and premium lifestyle products. 
            Curated selection of high-quality items just for you.
          </p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li><Mail size={18} /> support@premium.com</li>
            <li><Phone size={18} /> +1 (555) 123-4567</li>
            <li><MapPin size={18} /> 123 Boutique St, Fashion City</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Premium E-commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
