import React from 'react';
import './Category.css';

const categories = [
  { id: 1, name: "Cleansers", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Serums", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Moisturizers", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=300&q=80" },
  { id: 4, name: "Treatments", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80" },
];

const Category = () => {
  return (
    <section className="container section category-section">
      <div className="category-header">
        <h2>Shop by Category</h2>
        <p>Curated essentials for every step of your routine.</p>
      </div>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="category-img-wrapper">
              <img src={cat.img} alt={cat.name} />
            </div>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
