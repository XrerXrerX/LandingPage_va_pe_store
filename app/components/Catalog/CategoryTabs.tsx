/** @format */

"use client";
import { motion } from "framer-motion";

const categories = [
  "Semua",
  "Atomizer",
  "Paket (Bundling)",
  "Devices",
  "Liquid",
  "Aksesoris",
];

export default function CategoryTabs() {
  return (
    <div className="flex xs:flex-wrap items-center justify-end xs:justify-center gap-6 mt-8 md:mt-0">
      {categories.map((category, index) => (
        <motion.button
          key={index}
          className={` text-base tsm:text-base md:text-lg  ${
            category === "Semua" ? "text-pink-500" : "text-gray-600"
          } hover:text-pink-500 font-semibold`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
