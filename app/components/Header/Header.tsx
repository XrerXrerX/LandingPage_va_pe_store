/** @format */

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-pink-500 "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="2xl:w-11/12 xl:w-11/12 lg:w-full md:w-full sm:w-full xs:w-full mx-auto px-4  flex items-center justify-between md:justify-around headerScroll">
        {/* Logo di kiri */}
        <img src="/menu/lg.png" alt="Vape Shop Logo" className="w-18 h-16" />

        {/* Navigasi di tengah */}
        <div className="hidden md:flex items-center justify-center">
          <Navigation />
        </div>

        {/* Search Bar di kanan */}
        <div className="hidden md:flex items-center justify-end">
          <SearchBar />
        </div>

        {/* Tombol menu untuk layar kecil */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 border-b-4 border-pink-400 z-40"
        >
          <Navigation />
        </motion.div>
      )}
    </motion.header>
  );
}
