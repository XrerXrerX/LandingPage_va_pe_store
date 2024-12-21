/** @format */

"use client";
import { motion } from "framer-motion";

interface FooterHoursProps {
  title: string;
  hours: string[];
}

export default function FooterHours({ title, hours }: FooterHoursProps) {
  return (
    <div>
      <motion.h3
        className="text-pink-500 font-bold text-sm lg:text-xl mb-4 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h3>
      <ul className="space-y-2 ">
        {hours.map((hour, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className=" text-xxs lg:text-xl"
          >
            {hour}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
