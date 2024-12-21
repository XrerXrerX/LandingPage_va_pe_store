'use client';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface CartButtonProps {
  count: number;
}

export default function CartButton({ count }: CartButtonProps) {
  return (
    <div className="relative">
      {count > 0 && (
        <motion.span
          className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          {count}
        </motion.span>
      )}
      <Button variant="icon" aria-label="Shopping Cart">
        🛒
      </Button>
    </div>
  );
}