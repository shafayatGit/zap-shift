import React, { useState } from "react";
import MapView from "./MapView";
import { useMap } from "react-leaflet";
import { useLoadScript } from "@react-google-maps/api";
import { useLoaderData } from "react-router";
// import branchData from "warehouses.json";

const Coverage = () => {
  const branches = useLoaderData();
  //   console.log(branches);
  //   const [query, setQuery] = useState("");
  //   const map = useMap();

  //   const handleSearch = () => {
  //     const result = branchData.find(
  //       (branch) => branch.district.toLowerCase() === query.toLowerCase()
  //     );

  //     if (result) {
  //       map.setView([result.latitude, result.longitude], 12);
  //     } else {
  //       alert("District not found");
  //     }
  //   };
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-10 p-4">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Our Delivery Areas
        </h2>
        <h2 className="text-2xl font-bold mb-4 text-center">
          We Delivery in 64 Districts
        </h2>
        {/* Search Box */}
        {/* <div className="absolute top-4 left-4 z-[1000] bg-white p-3 rounded shadow-md w-64">
          <input
            type="text"
            placeholder="Enter district name"
            className="border w-full px-2 py-1 mb-2 rounded text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded w-full text-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div> */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <MapView branches={branches} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
