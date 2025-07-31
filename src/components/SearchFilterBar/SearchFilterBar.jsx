
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SearchFilterBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");

  const handleSearchClick = () => {
    const query = `?q=${search}&country=${country}`;
    navigate(`/searchpage${query}`); 
  };

  return (
    <div className="flex gap-3 p-4 bg-gray-50 rounded-full shadow-lg mb-4 justify-between items-center  ">
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-semibold">SEARCH</span>
        <input
          type="text"
          placeholder="Egypt"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input rounded-full  font-semibold outline-none"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-semibold">COUNTRY</span>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="input  rounded-full bg-white font-semibold outline-none"
        >
          <option value="">Select</option>
          <option value="EG">Egypt</option>
          <option value="US">USA</option>
          <option value="MA">Morocco</option>
          <option value="GR">Greece</option>
        </select>
      </div>

        {/* Check-in */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-semibold">CHECK-IN</span>
        <input
          type="date"
          onChange={(e) =>
            dispatch(setFilters({ ...filters, checkIn: e.target.value }))
          }
          className="input rounded-full bg-white font-semibold outline-none"
        />
      </div>

      {/* Check-out */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-semibold">CHECK-OUT</span>
        <input
          type="date"
          onChange={(e) =>
            dispatch(setFilters({ ...filters, checkOut: e.target.value }))
          }
          className=" input rounded-full bg-white font-semibold outline-none"
        />
      </div>

      <button
        className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
}

export default SearchFilterBar;

