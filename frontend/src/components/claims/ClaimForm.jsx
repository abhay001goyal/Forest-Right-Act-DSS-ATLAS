import React, { useState } from 'react';
import { createClaim } from '../../api/claims';

export default function ClaimForm({ onSuccess }) {
  const [form, setForm] = useState({
    claimant_name: '',
    claimant_contact: '',
    land_location: '',
    claim_details: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const newClaim = await createClaim(form);
      onSuccess && onSuccess(newClaim);
      setForm({ claimant_name: '', claimant_contact: '', land_location: '', claim_details: '' });
    } catch (err) {
      setError('Failed to submit claim. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="claim-form">
      <h3>Submit New Claim</h3>
      {error && <div className="error-message">{error}</div>}
      <input
        value={form.claimant_name}
        onChange={e => updateField('claimant_name', e.target.value)}
        placeholder="Claimant Name"
        required
        disabled={loading}
      />
      <input
        value={form.claimant_contact}
        onChange={e => updateField('claimant_contact', e.target.value)}
        placeholder="Contact Information"
        disabled={loading}
      />
      <textarea
        value={form.land_location}
        onChange={e => updateField('land_location', e.target.value)}
        placeholder="Land Location (GeoJSON or description)"
        rows="4"
        required
        disabled={loading}
      />
      <textarea
        value={form.claim_details}
        onChange={e => updateField('claim_details', e.target.value)}
        placeholder="Claim Details"
        rows="4"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Claim'}
      </button>
    </form>
  );
}
