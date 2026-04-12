import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Features.css';

const Features = () => {
  return (
    <section className="container section features">
      <div className="features-header">
        <h2 className="features-title">
          Formulated with <span className="leaf-icon">🌿</span> dermatologist-approved ingredients our skincare <span className="leaf-icon">✨</span> line delivers gentle, effective care with us.
        </h2>
        <div className="features-actions">
          <button className="btn btn-primary">
            Shop Now <ArrowRight size={16} />
          </button>
          <button className="btn btn-outline" style={{background: 'white'}}>
            Key Benefits
          </button>
        </div>
      </div>

      <div className="features-grid">
        <div className="features-image">
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d1d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Facial Massage" 
            className="rounded-image"
          />
        </div>
        <div className="features-cards">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Brightens Tone</h3>
            <p>Revives dull skin for a healthy, natural glow every day.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💧</div>
            <h3>Deeply Hydrates</h3>
            <p>Keeps skin soft, moisturized, and nourished all day long.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">〰️</div>
            <h3>Improves Texture</h3>
            <p>Smooths texture and refines skin for a softer appearance.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Protects Skin Barrier</h3>
            <p>Strengthens skin to prevent dryness, and sensitivity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
