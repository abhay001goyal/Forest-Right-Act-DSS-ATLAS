import API_BASE_URL from "../config";
import { getAuthHeaders } from "./auth";

export async function getPrediction(claim) {
  const res = await fetch(`${API_BASE_URL}/predictions`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(claim),
  });
  if (!res.ok) throw new Error("Prediction failed");
  return res.json();
}
