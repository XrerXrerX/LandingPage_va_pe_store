/** @format */

"use client";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-md transition-colors duration-200";
  const variants = {
    primary: "bg-pink-500 text-white px-4 py-2 hover:bg-pink-600",
    secondary: "border border-gray-300 px-4 py-2 hover:border-pink-500",
    icon: "text-pink-500 hover:text-pink-600",
  };

  return (
    <button
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
