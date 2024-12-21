/** @format */

"use client";
import { motion } from "framer-motion";
import BenefitItem from "./BenefitItem";
import CenteredVape from "./CenteredVape";

const benefits = [
  {
    image: "/benefit/i1.png",
    title: "AROMA YANG BERAGAM",
    description:
      "Pilihan Liquid Dengan Berbagai Rasa, Mulai Dari Buah, Dessert, Hingga Rasa Tembakau Klasik. Ini Memungkinkan Kamu Untuk Menikmati Variasi Yang Sesuai.",
  },
  {
    image: "/benefit/i2.png",
    title: "LEBIH SEDIKIT BAU",
    description:
      "Vaping Tidak Meninggalkan Bau Menyengat Seperti Rokok. Uap Yang Dihasilkan Memiliki Aroma Yang Lebih Lembut Dan Cepat Hilang, Sehingga Tidak Meninggalkan Bau.",
  },
  {
    image: "/benefit/i3.png",
    title: "KONTROL NIKOTIN",
    description:
      "Pengguna Dapat Mengontrol Kadar Nikotin Yang Mereka Konsumsi. Liquid Tersedia Dalam Berbagai Kadar Nikotin, Mulai Dari Yang Tinggi Hingga Bebas Nikotin.",
  },
  {
    image: "/benefit/i4.png",
    title: "LEBIH EKONOMIS",
    description:
      "Meski Investasi Awal Untuk Perangkat Vape Mungkin Lebih Tinggi, Dalam Jangka Panjang Vaping Bisa Lebih Hemat Karna Liquid Dan Coil Biasanya Lebih Murah.",
  },
  {
    image: "/benefit/i5.png",
    title: "RAMAH LINGKUNGAN",
    description:
      "Vape Menghasilkan Lebih Sedikit Sampah Dibanding Rokok Konvensional, Yang Dapat Menghasilkan Puntung Rokok Dan Abu. Selain Itu, Uap Yang Dihasilkan Lebih Cepat Terurai.",
  },
  {
    image: "/benefit/i6.png",
    title: "PENGGANTI ROKOK",
    description:
      "Vaping Dianggap Sebagai Alternatif Yang Lebih Baik Dibandingkan Merokok Karena Tidak Menghasilkan Tar Dan Ribuan Bahan Kimia Berbahaya.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="2xl:w-3/4 xl:w-3/4 lg:w-11/12 md:w-full sm:w-full xs:w-full mx-auto px-4">
        <motion.h2
          className="2xl:xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-xl font-extrabold text-center 2xl:mb-24 xl:mb-24 lg:mb-32 md:mb-16 sm:mb-12 xs:mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          BENEFIT PENGGUNAAN VAPE<span className="text-pink-500"> .</span>
        </motion.h2>

        <div className="relative flex flex-wrap justify-center items-center 2xl:min-h-[700px] xl:min-h-[700px] lg:min-h-[700px] md:min-h-[600px] sm:min-h-[500px] xs:min-h-[600px]">
          {/* Left benefits */}
          <div className="absolute 2xl:left-0 xl:left-0 lg:left-0 md:left-0 sm:left-[-10px] xs:left-0 space-y-16 w-[400px]  2xl:top-0 xl:top-0 lg:top-0 md:top-0 sm:top-0 xs:top-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <BenefitItem
                key={index}
                {...benefit}
                delay={index * 0.2}
                className={`
                ${
                  index === 0 || index === 2
                    ? "2xl:ml-12 xl:ml-12 lg:ml-12 md:ml-0  sm:ml-0 xs:ml-0"
                    : ""
                } 
              `}
              />
            ))}
          </div>

          {/* Centered vape */}
          <div className="flex-shrink-0">
            <CenteredVape />
          </div>

          {/* Right benefits */}
          <div className="absolute 2xl:right-0 xl:right-0 lg:right-0 md:right-0 sm:right-[-150px] xs:right-[-60px] space-y-16 w-[400px] 2xl:top-0 xl:top-0 lg:top-0 md:top-0 sm:top-0 xs:top-36">
            {benefits.slice(3).map((benefit, index) => (
              <BenefitItem
                key={index + 3}
                {...benefit}
                delay={(index + 3) * 0.2}
                className={`
                  ${
                    index + 3 === 3 || index + 3 === 5
                      ? "2xl:ml-[-30px] xl:ml-[-30px] lg:ml-[-30px] md:ml-0  sm:ml-0 xs:ml-0"
                      : ""
                  }
                  ${
                    index + 3 === 4
                      ? "2xl:ml-[--10px] xl:ml-[--10px] lg:ml-[--10px] md:ml-0  sm:ml-0 xs:ml-0"
                      : ""
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
