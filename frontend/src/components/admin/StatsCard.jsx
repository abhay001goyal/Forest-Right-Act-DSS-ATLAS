import React from 'react';

export default function StatsCard({ title, value, icon, color }) {
  return (
    <div className="stats-card" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="stats-icon">
        <i className={`fas ${icon}`} style={{ color }}></i>
      </div>
      <div className="stats-content">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}
