import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Package, Settings, LogOut, ChevronRight, Edit2 } from 'lucide-react';
import './Dashboard.css';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const orders = [
    { id: 'ORD-123', date: '2026-03-10', total: 299, status: 'Delivered' },
    { id: 'ORD-456', date: '2026-02-15', total: 550, status: 'Processing' }
  ];

  if (!user) return <div className="container">Please login to view your dashboard</div>;

  return (
    <div className="dashboard-page container">
      <div className="dashboard-sidebar">
        <div className="user-info-brief">
          <div className="user-avatar">
            {user.name.charAt(0)}
          </div>
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <nav className="dashboard-nav">
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
            <User size={20} /> Profile Information
          </button>
          <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
            <Package size={20} /> My Orders
          </button>
          <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
            <Settings size={20} /> Account Settings
          </button>
          <button onClick={logout} className="logout-btn">
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </div>

      <div className="dashboard-main">
        {activeTab === 'profile' && (
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Profile Information</h2>
              <button className="btn-edit"><Edit2 size={16} /> Edit Profile</button>
            </div>
            <div className="profile-details">
              <div className="detail-row">
                <span>Full Name</span>
                <p>{user.name}</p>
              </div>
              <div className="detail-row">
                <span>Email Address</span>
                <p>{user.email}</p>
              </div>
              <div className="detail-row">
                <span>Phone Number</span>
                <p>+1 (555) 000-0000</p>
              </div>
              <div className="detail-row">
                <span>Member Since</span>
                <p>March 2026</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="dashboard-card">
            <h2>Recent Orders</h2>
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-item">
                  <div className="order-main">
                    <h4>Order #{order.id}</h4>
                    <p>Placed on {order.date}</p>
                  </div>
                  <div className="order-status">
                    <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                  </div>
                  <div className="order-total">
                    <p>${order.total}</p>
                    <button className="btn-view-order">View <ChevronRight size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="dashboard-card">
            <h2>Account Settings</h2>
            <form className="settings-form">
              <div className="form-group">
                <label>Change Password</label>
                <input type="password" placeholder="Current Password" />
                <input type="password" placeholder="New Password" />
              </div>
              <button className="btn btn-primary">Update Settings</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
