import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

export default function MapSystem({ lat, lng }: { lat: number; lng: number }) {
  window.addEventListener("DOMContentLoaded", () => {});
  return (
    <div className="overflow-hidden flex">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[lat, lng]}
        zoom={13}
        // scrollWheelZoom={false}
        // boxZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}