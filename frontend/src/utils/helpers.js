export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

export function validateGeoJSON(str) {
  try {
    const obj = JSON.parse(str);
    return obj.type && obj.coordinates;
  } catch {
    return false;
  }
}
