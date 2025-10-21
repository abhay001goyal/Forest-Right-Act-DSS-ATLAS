from fastapi import APIRouter

router = APIRouter()

@router.get("/polygon-example")
def polygon_example():
    # Example GeoJSON polygon response to integrate with frontend map
    polygon = {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.5946, 12.9716],
                    [77.5947, 12.9717],
                    [77.5950, 12.9717],
                    [77.5946, 12.9716]
                ]
            ]
        },
        "properties": {"name": "Sample Polygon"}
    }
    return polygon
