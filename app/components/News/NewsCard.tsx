/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  buttonText: string;
  promoText?: string;
  reverse?: boolean;
}

export default function NewsCard({
  title,
  description,
  imagePath,
  imageAlt,
  buttonText,
  promoText,
  reverse = false,
}: NewsCardProps) {
  return (
    <motion.div
      className={`flex items-center gap-8 ${reverse ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-1/2 h-[400px]">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="w-1/2 space-y-4">
        <motion.h3
          className=" text-xl xl:text-3xl font-bold"
          initial={{ opacity: 0, x: reverse ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
          <span className="text-pink-500">.</span>
        </motion.h3>

        <motion.p
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="bg-pink-500 rounded-lg text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
          {promoText && (
            <span className="px-4 py-2 border-2 border-pink-500 text-pink-500 rounded-md">
              {promoText}
            </span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
