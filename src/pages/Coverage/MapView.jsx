import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SearchBox } from "./SearchBox";
// import { useRef } from "react";

// const mapRef = useRef();
export default function MapView({ branches }) {
  return (
    <div>
      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={7}
        className="h-[500px] w-full rounded-2xl shadow-lg"
        //   ref={mapRef}
      >
        <div className="max-w-6xl mx-auto">
          <SearchBox branches={branches}></SearchBox>
        </div>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {branches.map((pos, i) => (
          <Marker key={i} position={[pos.latitude, pos.longitude]}>
            <Popup>
              <strong>{pos.district}</strong>
              <br /> Areas: {pos.covered_area.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
