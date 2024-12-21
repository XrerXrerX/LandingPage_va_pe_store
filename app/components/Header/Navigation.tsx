/** @format */

"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "BERANDA", href: "#hero" },
  { label: "KATALOG", href: "#catalog" },
  { label: "TRENDING", href: "#trending" },
  { label: "BERITA", href: "#news" },
  {
    label: "KONTAK",
    href: "#", // Tidak ada tujuan href yang sebenarnya
    dropdownItems: [
      {
        label: "Whatsapp",
        href: "https://wa.me/yourwhatsappnumber",
        icon: "/topbanner/wa.svg",
      },
      {
        label: "Telegram",
        href: "https://t.me/yourtelegram",
        icon: "/topbanner/tl.svg",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/yourinstagram",
        icon: "/topbanner/ig.svg",
      },
    ],
  },
];

export default function Navigation() {
  const pathname = usePathname(); // Get the current path
  const [activeLink, setActiveLink] = useState<string>("");
  const [openItem, setOpenItem] = useState<string | null>(null); // Track the open dropdown item
  const navRef = useRef<HTMLDivElement>(null); // Add reference for the entire nav container
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference for dropdown area

  useEffect(() => {
    // Create Intersection Observer to watch the sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id); // Set the active section
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Watch for the sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect(); // Clean up the observer when component unmounts
    };
  }, []);

  // Handle item click to toggle dropdown
  const handleItemClick = (item: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default action (navigation)
    if (openItem === item) {
      setOpenItem(null); // Close the dropdown if it was already open
    } else {
      setOpenItem(item); // Open the dropdown
    }
  };

  // Close dropdown when clicking outside of the nav area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenItem(null); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll to section when clicking on the navigation links
  const handleScrollToSection = (href: string) => {
    const section = document.querySelector(href); // Select the element by ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the section smoothly
    }
  };

  return (
    <nav
      ref={navRef}
      className="flex items-center justify-around space-x-6 gap-1 xl:gap-8 xs:space-x-3 relative"
    >
      {navItems.map((item, index) => {
        const isActive = activeLink === item.href.substring(1);

        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            ref={item.dropdownItems ? dropdownRef : undefined}
            className="relative "
          >
            <Link
              href={item.href}
              className={`font-bold ${
                isActive
                  ? "text-pink-500 2xl:text-xl xl:text-lg lg:text-lg md:text-sm sm:text-base xs:text-sm"
                  : "text-black 2xl:text-xl xl:text-lg lg:text-lg md:text-sm sm:text-base xs:text-sm"
              } hover:text-pink-500`}
              onClick={(e) => {
                if (item.label === "KONTAK") {
                  handleItemClick(item.label, e); // Handle click for KONTAK
                } else {
                  e.preventDefault();
                  if (item.href.startsWith("#")) {
                    handleScrollToSection(item.href); // Scroll to the section
                  }
                }
              }}
            >
              {item.label}
            </Link>

            {/* Dropdown Menu */}
            {item.dropdownItems && openItem === item.label && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-[-120px] 2xl:left-0 xl:left-0 lg:left-0 md:left-0 sm:left-[-120px] mt-2 w-48 bg-pink-100 rounded-md shadow-lg py-2 z-50"
                >
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <motion.a
                      key={dropdownIndex}
                      href={dropdownItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-500"
                      whileHover={{ x: 5 }}
                    >
                      <span>
                        <img src={dropdownItem.icon} alt="" />
                      </span>
                      {dropdownItem.label}
                    </motion.a>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        );
      })}
    </nav>
  );
}
