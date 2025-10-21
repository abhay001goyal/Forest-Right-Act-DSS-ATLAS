import React from 'react';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Forest Rights Act - Decision Support System</h1>
        <p>Empowering communities through data-driven forest land claim management.</p>
      </section>
      <section className="features">
        <div className="feature-card">
          <i className="fas fa-file-alt"></i>
          <h2>Claim Submission</h2>
          <p>Seamlessly submit forest land claims with geographic mapping support.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-map-marked-alt"></i>
          <h2>Interactive Mapping</h2>
          <p>Visualize claim boundaries with dynamic GIS mapping tools.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-line"></i>
          <h2>Risk Prediction</h2>
          <p>Leverage AI/ML models to assess eligibility and risks.</p>
        </div>
      </section>
    </div>
  );
}
