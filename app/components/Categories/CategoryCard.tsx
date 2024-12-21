/** @format */

"use client";
import { motion } from "framer-motion";

interface CategoryCardProps {
  image: string;
  title: string;
}

export default function CategoryCard({ image, title }: CategoryCardProps) {
  console.log(image);
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="2xl:w-32 xl:w-32 lg:w-32 md:w-32 sm:w-24 xs:w-16 2xl:h-32 xl:h-32 lg:h-32 md:h-32 sm:h-24  xs:h-16 rounded-full border-[1px] border-pink-500 flex items-center justify-center mb-4">
        <div className="flex items-center bg-gray-600 2xl:p-8 xl:p-8 lg:p-8 md:p-8 sm:p-6 xs:p-3 rounded-full">
          <img
            src={image}
            alt={`Social icon for ${title}`}
            className="2xl:w-10 xl:w-10 lg:w-10 md:w-10 sm:w-8 xs:w-8 2xl:h-10 xl:h-10 lg:h-10 md:h-10 sm:h-8 xs:h-8 "
          />{" "}
        </div>
      </div>
      <h3 className="2xl:xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-xss font-semibold">
        {title}
      </h3>
    </motion.div>
  );
}
