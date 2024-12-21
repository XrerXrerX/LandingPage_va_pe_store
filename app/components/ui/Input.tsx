'use client';
import { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export default function Input({ 
  className, 
  icon,
  ...props 
}: InputProps) {
  return (
    <div className="relative">
      <input
        className={cn(
          "w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md",
          "focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500",
          "placeholder:text-gray-400",
          className
        )}
        {...props}
      />
      {icon && (
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
    </div>
  );
}