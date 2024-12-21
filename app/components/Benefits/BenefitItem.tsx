/** @format */

"use client";
import { motion } from "framer-motion";

interface BenefitItemProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export default function BenefitItem({
  image,
  title,
  description,
  delay = 0,
  className = "",
}: BenefitItemProps) {
  return (
    <motion.div
      className={`flex items-start 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4 sm:gap-0 xs:gap-4 sm:w-2/3 2xl:w-full xl:w-full lg:w-full md:w-full xs:w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex-shrink-0 z-10">
        <div className="w-12 h-12  flex items-center justify-center text-white text-2xl">
          <img
            src={image}
            alt={`Social icon for ${title}`}
            className="w-10 h-10 "
          />{" "}
        </div>
      </div>
      <div>
        <h3 className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-base xs:text-base font-extrabold mb-2 relative z-50 text-pink-500">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-xs xs:text-xs font-semibold relative z-50 2xl:mr-0 xl:mr-0 lg:mr-0 md:mr-8 sm:mr-0 xs:mr-12 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-12">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
