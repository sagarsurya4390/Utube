import React from "react";
import { Link } from "react-router-dom";
import { RiVideoAddLine } from "react-icons/ri"; // Correct import for the video add icon
import { BiNotification, BiUserCircle } from 'react-icons/bi';
import Searchbar from "./searchbar/searchbar";

export default function Navbar({ toggledrawer, setEditcreatechannelbtn, currentUser, setAuthbtn }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu */}
        <div onClick={toggledrawer} className="cursor-pointer space-y-1">
          <p className="w-6 h-0.5 bg-gray-700"></p>
          <p className="w-6 h-0.5 bg-gray-700"></p>
          <p className="w-6 h-0.5 bg-gray-700"></p>
        </div>

        {/* Logo and Brand Name */}
        <Link to={"/"} className="flex items-center space-x-2">
          <img src="/youtube.png" alt="YouTube Logo" className="h-8" />
          <p className="text-xl font-bold text-gray-800">Utube</p>
        </Link>
      </div>

      {/* Middle Section (Placeholder for Search Bar or other elements) */}
      <div className="flex items-center space-x-4">
        {/* Placeholder for search bar or other elements */}
        <div className="flex space-x-4">
          <p className="w-4 h-4 "></p>
          <p className="w-4 h-4 "></p>
          <p className="w-4 h-4 "></p>
          
        </div>
      </div>
      <Searchbar/>
      {/* Right Section */}
      <div className="flex items-center space-x-6">
        
        <RiVideoAddLine size={22} className="text-gray-700 cursor-pointer" />

        {/* Notification Icon */}
        <BiNotification size={22} className="text-gray-700 cursor-pointer" />

        {/* User Profile */}
        <div>
          {currentUser ? (
            <div
              onClick={() => setAuthbtn(true)}
              className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full cursor-pointer"
            >
              <p className="text-sm font-semibold">
                {currentUser?.result.name ? (
                  <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          ) : (
            <BiUserCircle size={22} className="text-blue-500 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}