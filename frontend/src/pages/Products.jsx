import React, { useState, useEffect } from 'react';
import { categoryAPI } from '../services/api';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal, Loader } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([
    { _id: '1', title: 'Premium Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600', category: { name: 'Electronics' } },
    { _id: '2', title: 'Luxury Watch', price: 550, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600', category: { name: 'Accessories' } },
    { _id: '3', title: 'Smart Backpack', price: 120, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600', category: { name: 'Gear' } },
    { _id: '4', title: 'Wireless Speaker', price: 199, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=600', category: { name: 'Electronics' } },
    { _id: '5', title: 'Leather Wallet', price: 85, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600', category: { name: 'Accessories' } },
    { _id: '6', title: 'Mechanical Keyboard', price: 150, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600', category: { name: 'Electronics' } }
  ]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoryAPI.getAll();
        setCategories(res.data.data || res.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="products-page container">
      <header className="page-header">
        <div>
          <h1>Premium Collection</h1>
          <p>Explore our exclusive range of high-quality products</p>
        </div>
        <div className="filter-actions">
          <div className="filter-item">
            <Filter size={18} />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat._id} value={cat.name.toLowerCase()}>{cat.name}</option>
              ))}
            </select>
          </div>
          <button className="btn-filter">
            <SlidersHorizontal size={18} /> Filters
          </button>
        </div>
      </header>

      {loading ? (
        <div className="loading-state">
          <Loader className="spin" size={40} />
          <p>Curating the best for you...</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
