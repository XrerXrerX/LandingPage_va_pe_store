/** @format */

"use client";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

const categories = [
  // { icon: "/category", title: "Catridge" },
  // { icon: "/Liquid", title: "Liquid" },
  // { icon: "/Mod", title: "Mod" },
  // { icon: "/Disposable", title: "Disposable" },
  // { icon: "/Pod", title: "Pod" },

  { image: "/category/cartridge.png", title: "cartridge" },
  { image: "/category/liquid.png", title: "Liquid" },
  { image: "/category/mod.png", title: "Mod" },
  { image: "/category/disposable.png", title: "Disposable" },
  { image: "/category/pod.png", title: "Pod" },
];

export default function Categories() {
  return (
    <section className="2xl:py-16 xl:py-16 lg:py-16 md:py-16 sm:py-12 xs:py-8 bg-white border-b-2 border-pink-400">
      <div className="2xl:w-3/4 xl:w-3/4 md:w-11/12 mx-auto px-4">
        <motion.h2
          className="2xl:xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          TOP KATEGORI<span className="text-pink-500"> .</span>
        </motion.h2>

        <div className="grid grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
