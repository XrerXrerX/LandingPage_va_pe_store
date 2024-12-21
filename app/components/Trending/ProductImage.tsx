/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductImage() {
  return (
    <div className="relative">
      <motion.div
        className="w-60 lg:w-80 h-60 lg:h-80 ml-[190px] sm:ml-[-80px] bottom-[200px] sm:bottom-0 md:ml-0 rounded-full bg-gray-600/20 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 border-[1px] m-[-8px] border-pink-500 rounded-full " />

        {/* <motion.div
          className="absolute inset-0"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-1 bg-pink-100 origin-left"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${i * 45}deg)`,
                transformOrigin: "0 0",
              }}
            />
          ))}
        </motion.div> */}
        <img
          src="/trending/dual.png"
          alt="Valiburn V12"
          className=" h-[290px] lg:h-[390px] ml-12 lg:ml-16 bottom-16 lg:bottom-20  z-10 relative"
        />
      </motion.div>
    </div>
  );
}
