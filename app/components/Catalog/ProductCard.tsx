/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface ProductCardProps {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  rating: number;
  image: string;
  hoverImage: string;
}

export default function ProductCard({
  title,
  originalPrice,
  discountedPrice,
  rating,
  image,
  hoverImage,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg p-4 border border-pink-400 cursor-pointer"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-28 sm:h-40 md:h-48 2xl:h-64 mb-4 ">
        <Image
          src={isHovered ? hoverImage : image}
          alt={title}
          fill
          className="object-contain transition-opacity duration-300"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className="2xl:text-lg xl:text-base tsm:text-base lg:text-lg md:text-lg sm:text-xs xs:text-xs font-semibold mb-2">
        {title}
      </h3>

      <div className="flex items-center gap-2 mb-3 2xl:text-xl xl:text-base lg:text-xl md:text-xl tsm:text-base sm:text-xs xs:text-xxss">
        <span className="text-gray-400 line-through">
          Rp {originalPrice.toLocaleString()}
        </span>
        <span className="text-pink-500 font-bold">
          Rp {discountedPrice.toLocaleString()}
        </span>
      </div>

      <div className="flex items-center justify-between flex-wrap">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl tsm:text-2xl sm:text-lg xs:text-lg",
                i < rating ? "text-yellow-400" : "text-gray-200"
              )}
            >
              ★
            </span>
          ))}
        </div>

        <motion.button
          className="bg-pink-500 2xl:text-xl xl:text-sm lg:text-xl md:text-lg tsm:text-lg sm:text-base xs:text-xs text-white 2xl:px-4 xl:px-4 lg:px-1 md:px-4 sm:px-2 xs:px-2 2xl:py-2 xl:py-2 lg:py-1 md:py-1 sm:py-1 xs:py-1 rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Beli Sekarang
        </motion.button>
      </div>
    </motion.div>
  );
}
