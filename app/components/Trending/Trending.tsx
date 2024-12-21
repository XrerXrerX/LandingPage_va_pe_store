/** @format */

"use client";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import ProductImage from "./ProductImage";
import TrendingFeatures from "./TrendingFeatures";
import TrendingPrice from "./TrendingPrice";
import Button from "../ui/Button";

export default function Trending() {
  const features = ["100% Natural", "Coupon Code: V12_Vali", "Garansi 1 Bulan"];

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full lg:w-11/12 2xl:w-3/4 mx-auto px-4">
        <div className="block sm:flex items-center justify-around">
          <div className="max-w-2xl">
            <motion.h2
              className="2xl:xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl font-extrabold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              YANG LAGI TRENDING<span className="text-pink-500">.</span>
            </motion.h2>

            <motion.h3
              className="2xl:xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg xs:text-base text-pink-500 font-extrabold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Valiburn V12 White Space (Limited)
            </motion.h3>

            <motion.p
              className="text-gray-600 text-xs sm:text-sm md:text-base font-bold mb-6 leading-relaxed relative z-40 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Dengan Desain Futuristik Dan Warna Putih Elegan, Valiburn V12
              Menawarkan Performa Maksimal Dan Kualitas Uap Yang Tebal.
              Dilengkapi Dengan Teknologi Terbaru Untuk Pengalaman Vaping Yang
              Halus Dan Nikmat, Pod Ini Sangat Cocok Untuk Pemula Maupun
              Pengguna Berpengalaman. Tak Hanya Stylish, Daya Tahan Baterai Yang
              Kuat Menjadikannya Pilihan Terbaik Untuk Vaping Sepanjang Hari.
            </motion.p>

            <motion.p
              className="text-xs md:text-sm text-gray-500 mb-2 hidden sm:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Dapatkan Sekarang Dan Rasakan Sendiri Sensasi Nya
            </motion.p>

            <TrendingPrice originalPrice={450000} discountedPrice={350000} />
            <TrendingFeatures features={features} />

            <CountdownTimer />
          </div>

          <ProductImage />
        </div>
      </div>
    </section>
  );
}
