import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = ({ currentPage = 'home', setCurrentPage, cycleTheme, activeThemeId }) => {
  return (
    <header className="navbar-container">
      <div className="container navbar">
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo height={28} color="var(--primary)" />
        </div>
        
        <nav className="nav-links">
          <a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('home'); }}>Home</a>
          <a href="#" className={currentPage === 'shop' ? 'active' : ''} onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('shop'); }}>Shop</a>
          <a href="#" className={currentPage === 'theme' ? 'active' : ''} onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('theme'); }}>Theme</a>
        </nav>
        
        <div className="nav-actions">
          <button className="cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-badge">0</span>
          </button>
          <button className="btn btn-primary" onClick={cycleTheme}>
            Change Theme ({activeThemeId?.split('-')[1]})
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
