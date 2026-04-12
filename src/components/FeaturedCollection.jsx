import React from 'react';
import { Star } from 'lucide-react';
import './Products.css'; // Reuse product styling

const featuredProducts = [
  {
    id: 1,
    name: "Golden Hour Glow Oil",
    price: 85,
    rating: 5,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80",
    status: "In Stock"
  },
  {
    id: 2,
    name: "Mineral Defense Sunscreen",
    price: 52,
    rating: 4,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=400&q=80",
    status: "In Stock"
  },
  {
    id: 3,
    name: "Matcha Clarifying Mask",
    price: 64,
    rating: 5,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=400&q=80",
    status: "Out of Stock"
  },
  {
    id: 4,
    name: "Peptide Firming Complex",
    price: 135,
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80",
    status: "In Stock"
  }
];

const FeaturedCollection = () => {
  return (
    <section className="container section products-section">
      <div className="products-header">
        <div className="products-title-col">
          <h2>Featured Collection</h2>
        </div>
        <div className="products-desc-col">
          <p>Discover our globally recognized, dermatologist-approved essentials for a timeless routine.</p>
        </div>
      </div>

      <div className="products-grid">
        {featuredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <div className={`status-badge ${product.status === 'Out of Stock' ? 'out-stock' : ''}`}>
                <span className="dot"></span> {product.status}
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-meta">
                <span className="price">${product.price}</span>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < product.rating ? "var(--primary)" : "transparent"} stroke="var(--primary)" />
                  ))}
                </div>
              </div>
              <button className="btn btn-primary btn-full">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
