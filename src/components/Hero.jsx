import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="container hero">
      <div className="hero-content">
        <h1 className="hero-title">The Creation of Light.<br/>Elevate your daily ritual.</h1>
        <div className="hero-content-bottom">
          <div className="hero-text-group">
            <p className="hero-subtitle">
              Meticulously crafted formulas that harmonize science and nature for the ultimate luxury of your skin. Proven elegance, no hyperbole.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary">
                Shop Now <ArrowRight size={16} />
              </button>
              <button className="btn btn-outline" style={{background: 'white'}}>
                Explore More
              </button>
            </div>
          </div>
          
          <div className="trusted-by">
            <span className="trusted-text">Trusted by</span>
            <div className="avatars">
              <img src="https://i.pravatar.cc/100?img=1" alt="User 1" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User 2" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User 3" />
              <div className="avatar-count">40K+</div>
            </div>
          </div>
        </div>
      </div>
        


      <div className="hero-images">
        <div className="image-left">
          <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Fairelux Aesthetic" 
            className="rounded-image"
          />
        </div>
        <div className="image-right">
          <img 
            src="https://images.unsplash.com/photo-1549439602-43ebca2327af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Clean skin" 
            className="rounded-image"
          />
          <div className="product-overlay">
            <div className="product-overlay-img">
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Product" />
            </div>
            <div className="product-overlay-info">
              <h4>Lumina Elixir Restorative Serum 50ml</h4>
              <p>Price: $185</p>
            </div>
            <button className="expand-btn"><ArrowUpRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
