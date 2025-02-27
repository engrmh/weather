import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface MapSystemProps {
  lat: number;
  lng: number;
}

function UpdateMapCenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap(); // Get the map instance
  useEffect(() => {
    map.setView([lat, lng], map.getZoom(), {
      animate: true, // Add smooth transition when map center changes
    });
  }, [lat, lng, map]);

  return null; // This component does not render anything
}

export default function MapSystem({ lat, lng }: MapSystemProps) {
  return (
    <div className="h-full w-full">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            Latitude: {lat}, Longitude: {lng}
          </Popup>
        </Marker>
        {/* Update map center on lat/lng change */}
        <UpdateMapCenter lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}
