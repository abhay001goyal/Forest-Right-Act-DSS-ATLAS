# Example utility: validate if GeoJSON is a Polygon (basic)

def is_valid_polygon(geojson: dict) -> bool:
    try:
        if geojson.get("type") == "Polygon" and isinstance(geojson.get("coordinates"), list):
            return True
    except Exception:
        pass
    return False
