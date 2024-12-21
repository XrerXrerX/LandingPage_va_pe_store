/** @format */

"use client";
import { motion } from "framer-motion";

interface TrendingFeaturesProps {
  features: string[];
}

export default function TrendingFeatures({ features }: TrendingFeaturesProps) {
  return (
    <motion.div
      className="hidden items-center gap-6 mb-8 border-b-[1px] border-pink-400 z-50 relative sm:flex  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 font-extrabold">
          <span className="text-pink-500">•</span>
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </motion.div>
  );
}
