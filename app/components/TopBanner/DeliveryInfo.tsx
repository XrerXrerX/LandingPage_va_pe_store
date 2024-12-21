/** @format */

"use client";
import { motion } from "framer-motion";

export default function DeliveryInfo() {
  return (
    <div className="flex items-center gap-4 ml-8">
      <motion.div
        className=" items-center gap-2 hidden 2xl:flex xl:flex lg:flex md:flex sm:flex"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-pink-500">
          <img
            src="/topbanner/hm.png"
            alt=""
            className="2xl:w-8 xl:w-8 lg:w-8 md:w-8  sm:w-8 xs:w-8"
          />
        </span>
        <div>
          <div className="font-semibold text-white/70 2xl:text-base xl:text-base lg:text-base md:text-md xs:text-xxss">
            Mau Beli Sendiri ?
          </div>
          <div className="text-xs text-gray-400  2xl:text-base xl:text-base lg:text-base md:text-md xs:text-xxss">
            Hub Kami
          </div>
        </div>
      </motion.div>

      <motion.div
        className=" items-center gap-2 hidden 2xl:flex xl:flex lg:flex md:flex"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-pink-500">
          <img src="/topbanner/mb.png" alt="noth" className="w-8" />
        </span>
        <div>
          <div className="font-semibold text-white/70  2xl:text-base xl:text-base lg:text-base md:text-md xs:text-xxs">
            Gratis Ongkir
          </div>
          <div className="text-xs text-gray-400  2xl:text-base xl:text-base lg:text-base md:text-md xs:text-xxs">
            Pembelian Diatas 1 juta
          </div>
        </div>
      </motion.div>
    </div>
  );
}
