import React from 'react';
import { ChevronUp } from 'lucide-react';

interface PointerProps {
  label: string;
  colorClass?: string;
  visible?: boolean;
}

export const Pointer: React.FC<PointerProps> = ({
  label,
  colorClass = "text-primary-500",
  visible = true,
}) => {
  if (!visible) return <div className="h-8" />;

  return (
    <div className={`flex flex-col items-center transition-all duration-300 ${colorClass}`}>
      <ChevronUp size={24} className="animate-bounce" />
      <span className="text-xs font-bold uppercase">{label}</span>
    </div>
  );
};
