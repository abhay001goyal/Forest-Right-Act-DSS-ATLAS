import React from 'react';

export default function ClaimDetails({ claim }) {
  if (!claim) {
    return <div className="claim-details">Select a claim to view details</div>;
  }

  return (
    <div className="claim-details">
      <h3>Claim Details</h3>
      <div className="detail-row">
        <label>Claimant Name:</label>
        <span>{claim.claimant_name}</span>
      </div>
      <div className="detail-row">
        <label>Contact:</label>
        <span>{claim.claimant_contact || 'N/A'}</span>
      </div>
      <div className="detail-row">
        <label>Status:</label>
        <span className={`status status-${claim.status}`}>{claim.status}</span>
      </div>
      <div className="detail-row">
        <label>Land Location:</label>
        <span>{claim.land_location}</span>
      </div>
      <div className="detail-row">
        <label>Details:</label>
        <p>{claim.claim_details || 'No details provided'}</p>
      </div>
      <div className="detail-row">
        <label>Created:</label>
        <span>{new Date(claim.created_at).toLocaleString()}</span>
      </div>
    </div>
  );
}
