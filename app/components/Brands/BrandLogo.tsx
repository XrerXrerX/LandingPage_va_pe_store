/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface BrandLogoProps {
  name: string;
  logo: string;
  delay?: number;
}

export default function BrandLogo({ name, logo, delay = 0 }: BrandLogoProps) {
  return (
    <motion.div
      className="flex items-center justify-center p-2 md:p-8 lg:p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        src={logo}
        alt={name}
        width={160}
        height={60}
        className="object-contain grayscale hover:grayscale-0 transition-all duration-100 w-48"
      />
    </motion.div>
  );
}
