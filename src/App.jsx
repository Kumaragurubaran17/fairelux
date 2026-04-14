import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Products from './components/Products';
import Category from './components/Category';
import FeaturedCollection from './components/FeaturedCollection';
import Ingredients from './components/Ingredients';
import BrandBook from './components/BrandBook';
import ProductListing from './components/ProductListing';

function App() {
  const [currentPage, setCurrentPage] = useState('brandbook');
  const [activeThemeId, setActiveThemeId] = useState('theme-3');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeThemeId);
  }, [activeThemeId]);

  const cycleTheme = () => {
    if (activeThemeId === 'theme-1') setActiveThemeId('theme-2');
    else if (activeThemeId === 'theme-2') setActiveThemeId('theme-3');
    else setActiveThemeId('theme-1');
  };

  return (
    <div className="app-wrapper">
      {currentPage !== 'brandbook' && (
        <div className="hero-section-wrapper" style={{ backgroundColor: 'var(--secondary)' }}>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} cycleTheme={cycleTheme} activeThemeId={activeThemeId} />
          {currentPage === 'home' && <Hero />}
        </div>
      )}
      {currentPage === 'home' ? (
        <>
          <Category />
          <Products />
          <Mission />
          <FeaturedCollection />
          <Ingredients />
        </>
      ) : currentPage === 'shop' ? (
        <ProductListing />
      ) : (
        <BrandBook activeThemeId={activeThemeId} setActiveThemeId={setActiveThemeId} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
