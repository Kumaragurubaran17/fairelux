import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Mission.css';

const Mission = () => {
  return (
    <section className="container section mission-section">
      <div className="mission-content">
        <h2>We blend science and nature to reveal your glowing skin</h2>
        <p className="mission-intro">
          At Skincare, we create dermatologist-approved, naturally enriched formulas designed to nourish, repair, and enhance your skin.
        </p>
        
        <div className="mission-items">
          <div className="mission-item">
            <h3 className="mission-subtitle"><CheckCircle2 size={16} className="check-icon"/> Our Mission</h3>
            <p>To elevate the daily ritual of self-care through meticulously crafted formulas that harmonize science and nature.</p>
          </div>
          <div className="mission-item">
            <h3 className="mission-subtitle"><CheckCircle2 size={16} className="check-icon"/> Our Vision</h3>
            <p>To become the global gold standard for holistic longevity—moving seamlessly from topical beauty to internal wellness.</p>
          </div>
        </div>

        <div className="mission-actions">
          <button className="btn btn-primary">
            Explore More <ArrowRight size={16} />
          </button>
          <div className="guarantee">
            <span className="guarantee-icon">👍</span>
            <span>100% Satisfaction guaranteed</span>
          </div>
        </div>
      </div>

      <div className="mission-images">
        <div className="mission-img-col">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Woman with eye patches" 
            className="rounded-image"
          />
          <img 
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Skincare application" 
            className="rounded-image"
          />
        </div>
        <div className="mission-img-main">
          <img 
            src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Product tube" 
            className="rounded-image tube-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
