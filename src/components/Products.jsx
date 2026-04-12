import React from 'react';
import { Star } from 'lucide-react';
import './Products.css';

const products = [
  {
    id: 1,
    name: "Obsidian Refining Cleanser",
    price: 68,
    rating: 5,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    status: "In Stock"
  },
  {
    id: 2,
    name: "Lumina Restorative Serum",
    price: 185,
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    status: "Out of Stock"
  },
  {
    id: 3,
    name: "Alabaster Silk Moisture Cream",
    price: 120,
    rating: 5,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    status: "In Stock"
  },
  {
    id: 4,
    name: "Champagne Gold Eye Lift",
    price: 95,
    rating: 4,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    status: "In Stock"
  }
];

const Products = () => {
  return (
    <section className="container section products-section">
      <div className="products-header">
        <div className="products-title-col">
          <h2>Our Best Product</h2>
        </div>
        <div className="products-desc-col">
          <p>Meticulously crafted formulas that harmonize science and nature for the ultimate luxury of your skin.</p>
        </div>
      </div>

      <div className="products-filters">
        <div className="filter-tabs">
          <button className="active">Popular</button>
          <button>Body</button>
          <button>Face</button>
          <button>Hair & Scalp</button>
          <button>Eye & Lip</button>
        </div>
        <a href="#" className="view-all">View All Product</a>
      </div>

      <div className="products-grid">
        {products.map(product => (
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

export default Products;
