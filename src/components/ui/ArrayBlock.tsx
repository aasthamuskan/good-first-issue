import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ArrayBlockProps {
  value: number;
  isActive?: boolean;
  isHighlighted?: boolean;
  isPointer?: boolean;
  label?: string;
  className?: string;
}

export const ArrayBlock: React.FC<ArrayBlockProps> = ({
  value,
  isActive = false,
  isHighlighted = false,
  className,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "flex items-center justify-center w-12 h-12 text-lg font-bold transition-all duration-300 border-2 rounded-md shadow-sm",
          isActive ? "bg-primary-500 text-white border-primary-600 scale-110" :
          isHighlighted ? "bg-primary-100 border-primary-300 dark:bg-primary-900/30 dark:border-primary-700" :
          "bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700 text-slate-700 dark:text-slate-200",
          className
        )}
      >
        {value}
      </div>
    </div>
  );
};
