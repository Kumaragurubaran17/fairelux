import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Ingredients.css';

const Ingredients = () => {
  return (
    <section className="ingredients-section bg-dark">
      <div className="container ingredients-container">
        <div className="ingredients-content">
          <h2>The Formulation of Luminous Vitality</h2>
          <p>Uncompromising ingredient transparency. We select only proven, high-performance actives to transform your daily routine into a timeless ritual.</p>
          <button className="btn btn-outline dark-theme-btn">
            Explore shop <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="ingredients-visual">
          <div className="ingredient-pointer point-1">
            <div className="dot"></div>
            <div className="label">
              <h4>Peptides</h4>
              <p>Promotes collagen synthesis to visibly smooth fine lines and improve elasticity</p>
            </div>
          </div>
          
          <div className="ingredient-pointer point-2">
            <div className="dot"></div>
            <div className="label">
              <h4>Plant-Derived Squalane</h4>
              <p>Replicates natural lipids to deeply hydrate and fortify the skin barrier</p>
            </div>
          </div>
          
          <img 
            src="/fairelux-png.png" 
            alt="Product Transparent" 
            className="main-product-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
