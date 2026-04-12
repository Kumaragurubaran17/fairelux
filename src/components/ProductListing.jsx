import React, { useState } from 'react';
import { Star, SlidersHorizontal, ChevronDown } from 'lucide-react';
import './ProductListing.css';

const allProducts = [
  { id: 1, name: "Obsidian Refining Cleanser", category: "Cleansers", price: 68, rating: 5, image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&q=80", status: "In Stock" },
  { id: 2, name: "Lumina Restorative Serum", category: "Serums", price: 185, rating: 5, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80", status: "Out of Stock" },
  { id: 3, name: "Alabaster Silk Moisture Cream", category: "Moisturizers", price: 120, rating: 5, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80", status: "In Stock" },
  { id: 4, name: "Champagne Gold Eye Lift", category: "Serums", price: 95, rating: 4, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80", status: "In Stock" },
  { id: 5, name: "Botanical Pre-Wash Oil", category: "Cleansers", price: 55, rating: 4, image: "https://images.unsplash.com/photo-1608248593842-8086202ee268?w=400&q=80", status: "In Stock" },
  { id: 6, name: "Midnight Recovery Complex", category: "Serums", price: 140, rating: 5, image: "https://images.unsplash.com/photo-1629198725807-68b201a417da?w=400&q=80", status: "In Stock" },
  { id: 7, name: "Cloud Sprout Daily SPF", category: "Moisturizers", price: 65, rating: 4, image: "https://images.unsplash.com/photo-1571781440743-85f81ca973b5?w=400&q=80", status: "In Stock" },
  { id: 8, name: "Mineral Detox Mask", category: "Treatments", price: 85, rating: 5, image: "https://images.unsplash.com/photo-1615397323674-55447bdf2ab5?w=400&q=80", status: "Low Stock" }
];

const categories = ["All", "Cleansers", "Serums", "Moisturizers", "Treatments"];

const ProductListing = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Recommended");

  const filteredProducts = allProducts.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <div className="plp-page fade-in">
      <div className="plp-container">
        <div className="plp-header">
          <h1>Shop Daily Essentials</h1>
          <p className="text-muted">Explore our curated collection of biologically active architectural skincare.</p>
        </div>

        <div className="plp-controls">
          <div className="plp-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`plp-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="plp-sort">
            <button className="sort-btn">
              {sortOption} <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="plp-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="plp-card">
              <div className="plp-image-container">
                <img src={product.image} alt={product.name} />
                <div className={`status-badge ${product.status === 'Out of Stock' ? 'out-stock' : ''}`}>
                  <span className="dot"></span> {product.status}
                </div>
              </div>
              <div className="plp-info">
                <span className="plp-category">{product.category}</span>
                <h3 className="plp-name">{product.name}</h3>
                <div className="plp-meta">
                  <span className="price">${product.price}</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < product.rating ? "var(--primary)" : "transparent"} stroke="var(--primary)" />
                    ))}
                  </div>
                </div>
                <button className="btn btn-primary plp-btn" disabled={product.status === 'Out of Stock'}>
                  {product.status === 'Out of Stock' ? 'Notify Me' : 'Add to Bag'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
