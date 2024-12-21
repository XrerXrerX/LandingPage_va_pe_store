/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const newsItems = [
  {
    title: "BUNDEL LIQUID TERBAIK",
    description:
      "Paket Pilihan Liquid Vape Berkualitas Tinggi Yang Dirancang Untuk Memberikan Pengalaman Vaping Terbaik. Dengan Berbagai Varian Rasa Yang Menarik, Bundel Ini Memungkinkan Vaper Mencoba Beberapa Rasa Sekaligus.",
    imagePath: "/news/news1.png",
    imageAlt: "Bundel Liquid Vape",
    buttonText: "Selengkapnya",
    promoText: "Klaim Promo Diskon 20%",
  },
  {
    title: "BARU MENGENAL VAPE ?",
    description:
      "Kami Menawarkan Paket Starter Vape Bundle Yang Dirancang Khusus Untuk Pemula Dengan Device Yang Mudah Digunakan Dan Pilihan Liquid Favorit.",
    imagePath: "/news/news2.png",
    imageAlt: "Starter Vape Bundle",
    buttonText: "Selengkapnya",
  },
  {
    title: "REKOMENDASI COIL",
    description:
      "Ingin Sensasi Vaping Yang Lebih Maksimal? Upgrade Dengan Pilihan Coil Terbaik Dari Kami! Coil Berkualitas Tinggi Ini Menghasilkan Rasa Yang Lebih Tajam Dan Uap Yang Tebal.",
    imagePath: "/news/news3.png",
    imageAlt: "Coil Recommendation",
    buttonText: "Selengkapnya",
  },
];

export default function News() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full xl:w-11/12 2xl:w-3/4 mx-auto px-4">
        <motion.h2
          className="2xl:xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl font-extrabold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          BERITA TERBARU<span className="text-pink-500">.</span>
        </motion.h2>

        {/* Flex row for both columns */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Column 1: Full Card */}
          <div className="w-full md:w-1/2 shadow-lg flex flex-col">
            <div className="relative h-[200px] lg:h-[260px] mb-4">
              <Image
                src={newsItems[0].imagePath}
                alt={newsItems[0].imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-sm  md:text-xl lg:text-2xl font-bold mb-2 pl-4 text-pink-500">
              {newsItems[0].title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-xs md:text-sm font-semibold mb-4 pl-3">
              {newsItems[0].description}
            </p>
            <div className="flex justify-between m-4 mt-auto text-xxs sm:text-base">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 rounded-lg text-white p-2"
              >
                {newsItems[0].buttonText}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-500 border border-pink-400
               hover:text-white text-xxs hover:bg-pink-500 sm:text-base p-2 rounded-lg"
              >
                {newsItems[0].promoText}
              </motion.button>
            </div>
          </div>

          {/* Column 2: Two Smaller Cards */}
          <div className="w-full md:w-1/2 space-y-8 ">
            {newsItems.slice(1).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg  shadow-lg"
              >
                <div className="w-2/3">
                  <h3 className="text-base md:text-base  lg:text-xl font-bold mb-2 text-pink-400">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-xs xl:text-base text-gray-600 font-medium leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 rounded-lg text-white p-2 text-sm sm:text-base"
                  >
                    {item.buttonText}
                  </motion.button>
                </div>
                <div className="relative w-1/3 h-[150px]">
                  <Image
                    src={item.imagePath}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
