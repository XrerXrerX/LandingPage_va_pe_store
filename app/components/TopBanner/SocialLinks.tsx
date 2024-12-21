/** @format */

"use client";
import { motion } from "framer-motion";

const socialLinks = [
  { image: "/topbanner/xx.png", href: "https://twitter.com" },
  { image: "/topbanner/ig.png", href: "https://instagram.com" },
  { image: "/topbanner/fb.png", href: "https://facebook.com" },
  { image: "/topbanner/yt.png", href: "https://youtube.com" },
  { image: "/topbanner/tk.png", href: "https://tiktok.com" },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 ml-8">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={social.image}
            alt={`Social icon for ${social.href}`}
            className="w-6 h-5 2xl:w-6 xl:w-6 lg:w-6 md:w-6 sm:w-5 xs:w-4 2xl:h-6 xl:h-6 lg:h-6 md:h-6 sm:h-5 xs:h-4"
          />
        </motion.a>
      ))}
    </div>
  );
}
