/** @format */

"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="relative h-[450px] sm:h-[775px] text-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0" />
        <video autoPlay loop muted className="w-full h-full  object-fill">
          <source src="/menu/vp.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          className="2xl:xl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl font-extrabold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          WELCOME TO <span className="text-pink-500">THISVAPESTORE </span>
        </motion.h1>
        <motion.p
          className="2xl:xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          YOUR FAVORITES, STOCKED DAILY.
        </motion.p>
      </div>
    </motion.div>
  );
}
