import API_BASE_URL from "../config";
import { getAuthHeaders } from "./auth";

export async function fetchClaims() {
  const res = await fetch(`${API_BASE_URL}/claims`, { 
    headers: getAuthHeaders() 
  });
  if (!res.ok) throw new Error("Failed to fetch claims");
  return res.json();
}

export async function createClaim(data) {
  const res = await fetch(`${API_BASE_URL}/claims`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create claim");
  return res.json();
}

export async function fetchClaimById(id) {
  const res = await fetch(`${API_BASE_URL}/claims/${id}`, { 
    headers: getAuthHeaders() 
  });
  if (!res.ok) throw new Error("Failed to fetch claim");
  return res.json();
}

export async function updateClaim(id, data) {
  const res = await fetch(`${API_BASE_URL}/claims/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update claim");
  return res.json();
}
