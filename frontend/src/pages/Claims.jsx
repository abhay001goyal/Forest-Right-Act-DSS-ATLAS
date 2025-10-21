import React, { useState } from 'react';
import ClaimForm from '../components/claims/ClaimForm';
import ClaimList from '../components/claims/ClaimList';
import ClaimDetails from '../components/claims/ClaimDetails';  // <-- ensure this matches


export default function Claims() {
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [refresh, setRefresh] = useState(0);

  function handleClaimCreated() {
    setRefresh(prev => prev + 1);
  }

  return (
    <div className="claims-page">
      <h1>Claims Management</h1>
      <div className="claims-layout">
        <div className="claims-left">
          <ClaimForm onSuccess={handleClaimCreated} />
          <ClaimList key={refresh} onSelect={setSelectedClaim} />
        </div>
        <div className="claims-right">
          <ClaimDetails claim={selectedClaim} />
        </div>
      </div>
    </div>
  );
}
