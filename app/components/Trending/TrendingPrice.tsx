/** @format */

"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";

interface TrendingPriceProps {
  originalPrice: number;
  discountedPrice: number;
}

export default function TrendingPrice({
  originalPrice,
  discountedPrice,
}: TrendingPriceProps) {
  return (
    <motion.div
      className="flex items-center gap-2 mb-6 top-6 sm:top-0 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <span className="text-gray-400 line-through text-xxs sm:text-sm lg:text-2xl font-extrabold">
        Rp {originalPrice.toLocaleString()}
      </span>
      <span className="text-pink-500 text-xs sm:text-xl lg:text-4xl font-extrabold">
        Rp {discountedPrice.toLocaleString()}
      </span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.button
          className="bg-pink-500 rounded-lg text-white text-sm md:text-lg px-[8px] sm:px-2 lg:px-5 xl:px-8 py-1 sm:py-2 lg:py-2 xl:py-3 ml-0  sm:ml-0 xl:ml-20 relative z-40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Beli Sekarang
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
