import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchClaimById } from '../api/claims';
import { getPrediction } from '../api/predictions';
import Loader from '../components/common/Loader';

export default function ClaimDetail() {
  const { id } = useParams();
  const [claim, setClaim] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [predicting, setPredicting] = useState(false);

  useEffect(() => {
    async function loadClaim() {
      try {
        const data = await fetchClaimById(id);
        setClaim(data);
      } catch (err) {
        console.error('Failed to load claim', err);
      } finally {
        setLoading(false);
      }
    }
    loadClaim();
  }, [id]);

  async function handlePredict() {
    setPredicting(true);
    try {
      const result = await getPrediction(claim);
      setPrediction(result);
    } catch (err) {
      console.error('Prediction failed', err);
    } finally {
      setPredicting(false);
    }
  }

  if (loading) return <Loader />;
  if (!claim) return <div>Claim not found</div>;

  return (
    <div className="claim-detail-page">
      <h1>Claim #{claim.id}</h1>
      <div className="claim-info">
        <p><strong>Claimant:</strong> {claim.claimant_name}</p>
        <p><strong>Status:</strong> <span className={`status status-${claim.status}`}>{claim.status}</span></p>
        <p><strong>Location:</strong> {claim.land_location}</p>
        <p><strong>Details:</strong> {claim.claim_details}</p>
      </div>
      
      <button onClick={handlePredict} disabled={predicting}>
        {predicting ? 'Analyzing...' : 'Get Risk Prediction'}
      </button>
      
      {prediction && (
        <div className="prediction-result">
          <h3>Prediction Result</h3>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
