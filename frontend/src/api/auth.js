import API_BASE_URL from "../config";

export async function login(username, password) {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function register(username, password, role = "user") {
  const res = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password, role }),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}

export function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return token ? { 
    Authorization: `Bearer ${token}`, 
    "Content-Type": "application/json" 
  } : { 
    "Content-Type": "application/json" 
  };
}
