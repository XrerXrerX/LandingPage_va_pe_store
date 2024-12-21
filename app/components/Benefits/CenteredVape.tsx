/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CenteredVape() {
  return (
    <div className="relative 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[400px] sm:w-[300px] xs:w-[300px] 2xl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[400px] sm:h-[300px] xs:h-[300px]">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-full">
          {/* Pink circle background */}
          <motion.div
            className="absolute inset-0 bg-pink-500 rounded-full opacity-10"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Decorative shapes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute 2xl:w-16 xl:w-16 lg:w-16 md:w-12 sm:w-10 xs:w-8 2xl:h-32 xl:h-32 lg:h-32 md:h-32 sm:h-28 xs:h-20  bg-pink-500 rounded-full opacity-10"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "center",
                rotate: `${i * 45}deg`,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: [1, 2.8, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <div className="relative 2xl:left-40 xl:left-40 lg:left-40 md:left-32 sm:left-24 xs:left-24 2xl:bottom-12 xl:bottom-12 lg:bottom-12 md:bottom-12 sm:bottom-6 xs:bottom-8 2xl:w-48 xl:w-44 lg:w-44 md:w-40 sm:w-28 xs:w-24">
            <motion.div
              className="relative"
              animate={{ y: [0, -20, 0] }} // Move up by 20px and then back to original
              transition={{
                duration: 2, // Duration of each cycle
                repeat: Infinity, // Infinite repeat
                ease: "easeInOut", // Smooth ease
              }}
            >
              <Image
                src="/benefit/vape.png"
                alt="Vape Device"
                width={180} // Set specific width
                height={160} // Set specific height
                className="object-contain z-10"
              />
            </motion.div>
          </div>
          {/* Vape device image */}
        </div>
      </motion.div>
    </div>
  );
}
