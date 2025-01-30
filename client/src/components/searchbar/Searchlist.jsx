import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Searchlist({ titleArray, setSearchQuery }) {
  return (
    <div>
      {titleArray.map((m) => (
        <p
          key={m}
          onClick={() => setSearchQuery(m)} // Corrected function name
          className="hover:bg-gray-100 cursor-pointer p-2"
        >
          <FaSearch /> {m}
        </p>
      ))}
    </div>
  );
}
