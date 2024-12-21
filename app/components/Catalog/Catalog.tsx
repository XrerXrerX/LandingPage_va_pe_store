/** @format */

"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import CategoryTabs from "./CategoryTabs";

const products = [
  {
    title: "Valiburn Pod Extreme",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/dual.png",
  },
  {
    title: "Valiburn Pod Extreme Free Liquid",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/wbox.png",
  },
  {
    title: "Valiburn Pod Extreme",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/dual.png",
  },
  {
    title: "Valiburn Pod Extreme Free Liquid",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/wbox.png",
  },
  {
    title: "Valiburn Pod Extreme",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/dual.png",
  },
  {
    title: "Valiburn Pod Extreme Free Liquid",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/wbox.png",
  },
  {
    title: "Valiburn Pod Extreme",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/dual.png",
  },
  {
    title: "Valiburn Pod Extreme Free Liquid",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/wbox.png",
  },

  {
    title: "Valiburn Pod Extreme",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/dual.png",
  },
  {
    title: "Valiburn Pod Extreme Free Liquid",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/wbox.png",
  },
  {
    title: "Valiburn Pod Extreme",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/dual.png",
  },
  {
    title: "Valiburn Pod Extreme Free Liquid",
    originalPrice: 450000,
    discountedPrice: 350000,
    rating: 4,
    image: "/catalogue/solo.png",
    hoverImage: "/catalogue/wbox.png",
  },
];

export default function Catalog() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="2xl:w-11/12 xl:w-full lg:w-full md:w-11/12 sm:w-full xs:w-full mx-auto px-4">
        <div className="flex  xs:flex-wrap md:flex-wrap items-center justify-between mb-12 border-b-[1px] border-pink-400">
          <motion.h2
            className="2xl:xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-extrabold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            KATALOG<span className="text-pink-500">.</span>
          </motion.h2>
          <CategoryTabs />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
