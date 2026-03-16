import React, { useState, useEffect } from 'react';
import { categoryAPI } from '../services/api';
import { Plus, Edit, Trash2, Users, Package, DollarSign, LayoutDashboard } from 'lucide-react';
import './Dashboard.css';

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('categories');
  const [loading, setLoading] = useState(true);

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
    <div className="dashboard-page container">
      <div className="dashboard-sidebar">
        <div className="user-info-brief">
          <div className="user-avatar admin">A</div>
          <div>
            <h3>Admin Panel</h3>
            <p>Admin Control Center</p>
          </div>
        </div>
        <nav className="dashboard-nav">
          <button className={activeTab === 'stats' ? 'active' : ''} onClick={() => setActiveTab('stats')}>
            <LayoutDashboard size={20} /> Overview
          </button>
          <button className={activeTab === 'categories' ? 'active' : ''} onClick={() => setActiveTab('categories')}>
            <Package size={20} /> Categories
          </button>
          <button className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}>
            <Users size={20} /> Users
          </button>
        </nav>
      </div>

      <div className="dashboard-main">
        {activeTab === 'stats' && (
          <div className="admin-overview">
            <div className="admin-stats">
              <div className="stat-card">
                <h3>Total Revenue</h3>
                <p>$12,450</p>
                <DollarSign size={20} className="stat-icon" />
              </div>
              <div className="stat-card">
                <h3>Total Orders</h3>
                <p>154</p>
                <Package size={20} className="stat-icon" />
              </div>
              <div className="stat-card">
                <h3>Total Users</h3>
                <p>89</p>
                <Users size={20} className="stat-icon" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Category Management</h2>
              <button className="btn btn-primary"><Plus size={18} /> Add Category</button>
            </div>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Category Name</th>
                    <th>Slug</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(cat => (
                    <tr key={cat._id}>
                      <td>{cat.name}</td>
                      <td>{cat.slug}</td>
                      <td className="admin-actions">
                        <button className="btn-icon edit"><Edit size={16} /></button>
                        <button className="btn-icon delete"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;


