import { useState } from "react";
import { useMap } from "react-leaflet";

export const SearchBox = ({ branches }) => {
  const [query, setQuery] = useState("");
  const map = useMap();

  const handleSearch = () => {
    const result = branches.find(
      (branch) => branch.district.toLowerCase() === query.toLowerCase()
    );

    if (result) {
      map.flyTo([result.latitude, result.longitude], 14, {
        animate: true,
        duration: 2, // seconds
      });
    } else {
      alert("District not found");
    }
  };

  return (
    <div className="bg-white absolute mx-auto z-[1000] p-3 rounded shadow-lg w-64">
      <input
        type="text"
        placeholder="Enter district name"
        className="bg-white text-black border w-full px-2 py-1 mb-2 rounded text-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        className="bg-blue-600 text-black px-3 py-1 rounded w-full text-sm"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
