import React from "react";

const NavBar = () => {
  return (
    <div className="bg-black p-4">
      <div className="text-white mx-48 font-bold flex">
        <a href="#" className="mx-2 p-2">
          Home
        </a>
        <a href="#" className="mx-2 p-2">
          Genre
        </a>
        <a href="#" className="mx-2 p-2">
          Country
        </a>
        <input
          type="text"
          placeholder="Search movies....."
          className="border border-2 rounded-full p-2 mx-2 text-black font-light w-80"
        />
        <a href="#" className="mx-2 p-2">
          Movies
        </a>
        <a href="#" className="mx-2 p-2">
          Series
        </a>
        <a href="#" className="mx-2 p-2">
          Animations
        </a>
        <a href="#" className="mx-2 p-2">
          Login/Signup
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
