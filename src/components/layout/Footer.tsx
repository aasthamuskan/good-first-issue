import React from 'react';
import { Clock, Info, Layers } from 'lucide-react';

interface FooterProps {
  timeComplexity: string;
  spaceComplexity: string;
  invariant: string;
}

export const Footer: React.FC<FooterProps> = ({
  timeComplexity,
  spaceComplexity,
  invariant,
}) => {
  return (
    <footer className="mt-auto border-t bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800">
      <div className="container px-4 py-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <Clock size={16} />
              <span>Time Complexity</span>
            </div>
            <code className="px-2 py-1 text-sm font-mono rounded bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400">
              {timeComplexity}
            </code>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <Layers size={16} />
              <span>Space Complexity</span>
            </div>
            <code className="px-2 py-1 text-sm font-mono rounded bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400">
              {spaceComplexity}
            </code>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <Info size={16} />
              <span>Invariant / Rule</span>
            </div>
            <p className="text-sm italic text-slate-600 dark:text-slate-400">
              {invariant}
            </p>
          </div>
        </div>
        <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs text-center text-slate-400">
            DSA Pattern Visualizer &copy; {new Date().getFullYear()} - Production Ready Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};
