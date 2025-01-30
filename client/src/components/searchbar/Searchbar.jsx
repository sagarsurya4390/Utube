import React, { useState, useEffect } from 'react';
import { BsMicFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Searchlist from './Searchlist';

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState(false);

  // Filter titles based on search query
  const titleArray = ["video1", "video2", "animation video", "Movies"];

  // Memoizing filtered titles to optimize performance
  const filteredTitles = React.useMemo(() => {
    return titleArray.filter((q) =>
      q.toUpperCase().includes(searchQuery.toUpperCase())
    );
  }, [searchQuery]);

  // Close search list if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".searchbar-container")) {
        setSearchList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto searchbar-container">
      {/* Search Bar Container */}
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setSearchList(true)}
          className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 rounded-l-full"
          aria-label="Search"
        />

        {/* Search Icon */}
        <Link
          to={`/search?query=${searchQuery}`} // Update the link to your search route
          className="p-3 bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Search"
        >
          <FaSearch className="text-gray-600" />
        </Link>

        {/* Microphone Icon */}
        <button
          className="p-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-r-full"
          aria-label="Voice Search"
        >
          <BsMicFill className="text-gray-600" />
        </button>
      </div>

      {/* Search List Dropdown */}
      {searchList && searchQuery && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <Searchlist setSearchQuery={setSearchQuery} titleArray={filteredTitles} />
        </div>
      )}
    </div>
  );
}
