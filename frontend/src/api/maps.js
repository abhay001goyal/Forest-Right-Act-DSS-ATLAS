import API_BASE_URL from "../config";
import { getAuthHeaders } from "./auth";

export async function analyzeLocation(latitude, longitude, radius) {
  const res = await fetch(`${API_BASE_URL}/analyze`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ latitude, longitude, radius_km: radius }),
  });
  if (!res.ok) throw new Error("Failed to analyze location");
  return res.json();
}

export async function fetchMapPolygon() {
  const res = await fetch(`${API_BASE_URL}/maps/polygon-example`, { 
    headers: getAuthHeaders() 
  });
  if (!res.ok) throw new Error("Failed to fetch polygon");
  return res.json();
}
