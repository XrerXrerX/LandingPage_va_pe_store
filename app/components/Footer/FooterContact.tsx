/** @format */

"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface FooterContactProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export default function FooterContact({ title, links }: FooterContactProps) {
  return (
    <div>
      <motion.h3
        className="text-pink-500 font-bold text-sm lg:text-xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className=" text-xxs lg:text-xl"
          >
            <Link
              href={link.href}
              className="hover:text-pink-500 transition-colors flex items-center gap-2 "
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
