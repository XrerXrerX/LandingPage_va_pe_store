/** @format */

"use client";
import { motion } from "framer-motion";
import MarqueeText from "./MarqueeText";
import BrandLogo from "./BrandLogo";

const brands = [
  { name: "VUSE", logo: "/brands/vuse.png" },
  { name: "UWELL", logo: "/brands/uwell.png" },
  { name: "SMOK", logo: "/brands/smok.png" },
  { name: "RELX", logo: "/brands/relx.png" },
  { name: "LOST VAPE", logo: "/brands/lostvape.png" },
  { name: "HOTCIG", logo: "/brands/hotcig.png" },
  { name: "SMOANT", logo: "/brands/smoant.png" },
  { name: "VAPORESSO", logo: "/brands/vaporesso.png" },
  { name: "FOOM", logo: "/brands/foom.png" },
  { name: "HEXOHM", logo: "/brands/hexohm.png" },
];

export default function Brands() {
  return (
    <section className="bg-white">
      <MarqueeText />

      <div className="w-11/12 mx-auto px-4 py-16">
        <motion.h2
          className="2xl:xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          BRAND ANDALAN KAMI<span className="text-pink-500">.</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <BrandLogo key={brand.name} {...brand} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
