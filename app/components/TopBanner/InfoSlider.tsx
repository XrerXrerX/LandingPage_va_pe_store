/** @format */

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const infoMessages = [
  "Inilah istilah - istilah dalam dunia Vape biar kamu kekiniant!",
  "Dapatkan diskon 20% untuk pembelian pertama!",
  "Gratis ongkir untuk pembelian di atas Rp 500.000",
  "Join Telegram kami untuk info produk terbaru!",
  "Promo spesial setiap akhir pekan!",
];

export default function InfoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % infoMessages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? infoMessages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % infoMessages.length);
  };

  return (
    <div className="flex-1 flex items-center justify-center gap-4 px-4 hidden xl:flex 2xl:flex ">
      <button
        onClick={handlePrev}
        className="text-pink-500 hover:text-pink-400"
      >
        ← previous
      </button>

      <div className="relative overflow-hidden flex-1 h-6 bg-gray-700/50 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center text-center"
          >
            {infoMessages[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={handleNext}
        className="text-pink-500 hover:text-pink-400"
      >
        next →
      </button>
    </div>
  );
}
