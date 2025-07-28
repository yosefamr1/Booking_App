import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, clearFilters } from "../../store/filtersSlice";

function SearchFilterBar() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <div className="flex items-center justify-between gap-3 p-4 bg-gray-50 rounded-full shadow-lg mb-4">
      
      {/* Search Input */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-semibold">SEARCH</span>
        <input
          type="text"
          value={filters.search}
          onChange={(e) =>
            dispatch(setFilters({ ...filters, search: e.target.value }))
          }
          className="px-4 py-2 rounded-full bg-white font-semibold outline-none"
          // placeholder="Egypt"
        />
      </div>

      {/* Country Select */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-semibold">COUNTRY</span>
        <select
          value={filters.country}
          onChange={(e) =>
            dispatch(setFilters({ ...filters, country: e.target.value }))
          }
          className="px-4 py-2 rounded-full bg-white font-semibold outline-none"
        >
          <option>Egypt</option>
          <option>USA</option>
          <option>France</option>
        </select>
      </div>

      {/* Check-in */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-semibold">CHECK-IN</span>
        <input
          type="date"
          value={filters.checkIn}
          onChange={(e) =>
            dispatch(setFilters({ ...filters, checkIn: e.target.value }))
          }
          className="px-4 py-2 rounded-full bg-white font-semibold outline-none"
        />
      </div>

      {/* Check-out */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-semibold">CHECK-OUT</span>
        <input
          type="date"
          value={filters.checkOut}
          onChange={(e) =>
            dispatch(setFilters({ ...filters, checkOut: e.target.value }))
          }
          className="px-4 py-2 rounded-full bg-white font-semibold outline-none"
        />
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => dispatch(clearFilters())}
        className="font-semibold text-gray-600 hover:underline"
      >
        Clear Filters
      </button>

      {/* Search Button */}
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
        onClick={() => console.log("Search with:", filters)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchFilterBar;
