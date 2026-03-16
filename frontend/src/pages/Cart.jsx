import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty container">
        <div className="empty-content">
          <ShoppingBag size={80} />
          <h1>Your cart is empty</h1>
          <p>But it doesn't have to be. Explore our premium collection and find something you'll love.</p>
          <Link to="/products" className="btn btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h1>Shopping Cart</h1>
      
      <div className="cart-grid">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item._id} className="cart-item">
              <div className="item-img">
                <img src={item.image || 'https://via.placeholder.com/150'} alt={item.title} />
              </div>
              <div className="item-info">
                <h3>{item.title}</h3>
                <p className="item-price">${item.price}</p>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}><Minus size={16} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, item.quantity + 1)}><Plus size={16} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="btn-remove">
                    <Trash2 size={18} /> Remove
                  </button>
                </div>
              </div>
              <div className="item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="btn-clear">Clear Shopping Cart</button>
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="btn btn-primary checkout-btn">
            Proceed to Checkout <ArrowRight size={20} />
          </button>
          <p className="secure-checkout">100% Secure Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
