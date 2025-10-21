import React, { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

export default function PolygonEditor({ onPolygonCreated }) {
  const [geoJSON, setGeoJSON] = useState(null);

  function handleCreated(e) {
    const layer = e.layer;
    const geoJSONData = layer.toGeoJSON();
    setGeoJSON(geoJSONData);
    onPolygonCreated && onPolygonCreated(geoJSONData);
  }

  return (
    <div className="polygon-editor">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleCreated}
            draw={{
              rectangle: true,
              polygon: true,
              circle: false,
              circlemarker: false,
              marker: false,
              polyline: false
            }}
          />
        </FeatureGroup>
      </MapContainer>
      {geoJSON && (
        <div className="geojson-output">
          <h4>Generated GeoJSON:</h4>
          <pre>{JSON.stringify(geoJSON, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
