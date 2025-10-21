import React, { useEffect, useState } from 'react';
import { fetchClaims } from '../../api/claims';
import Loader from '../common/Loader';

export default function ClaimList({ onSelect }) {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadClaims() {
      try {
        const data = await fetchClaims();
        setClaims(data);
      } catch (err) {
        setError('Failed to load claims');
      } finally {
        setLoading(false);
      }
    }
    loadClaims();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="claim-list">
      <h3>All Claims</h3>
      {claims.length === 0 ? (
        <p>No claims found.</p>
      ) : (
        <ul>
          {claims.map(claim => (
            <li key={claim.id} onClick={() => onSelect && onSelect(claim)}>
              <div className="claim-item">
                <strong>{claim.claimant_name}</strong>
                <span className={`status status-${claim.status}`}>{claim.status}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
