import React, { useState, useEffect } from 'react';
import { fetchClaims } from '../../api/claims';
import StatsCard from './StatsCard';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const claims = await fetchClaims();
        setStats({
          total: claims.length,
          pending: claims.filter(c => c.status === 'pending').length,
          approved: claims.filter(c => c.status === 'approved').length,
          rejected: claims.filter(c => c.status === 'rejected').length
        });
      } catch (err) {
        console.error('Failed to load stats', err);
      }
    }
    loadStats();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats-grid">
        <StatsCard title="Total Claims" value={stats.total} icon="fa-file" color="#2c5530" />
        <StatsCard title="Pending" value={stats.pending} icon="fa-clock" color="#ffc107" />
        <StatsCard title="Approved" value={stats.approved} icon="fa-check" color="#28a745" />
        <StatsCard title="Rejected" value={stats.rejected} icon="fa-times" color="#dc3545" />
      </div>
    </div>
  );
}
