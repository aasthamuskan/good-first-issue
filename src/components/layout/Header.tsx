import React from 'react';
import { Settings, Moon, Sun, Layers } from 'lucide-react';
import { PatternType } from '../../algorithms/stepGenerator';

interface HeaderProps {
  currentPattern: PatternType;
  onPatternChange: (pattern: PatternType) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPattern,
  onPatternChange,
  isDarkMode,
  toggleDarkMode,
}) => {
  const patterns: { value: PatternType; label: string }[] = [
    { value: 'SLIDING_WINDOW', label: 'Sliding Window' },
    { value: 'TWO_POINTERS', label: 'Two Pointers' },
    { value: 'PREFIX_SUM', label: 'Prefix Sum' },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500">
            <Layers className="text-white" size={24} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:block">
            DSA <span className="text-primary-500">Visualizer</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              value={currentPattern}
              onChange={(e) => onPatternChange(e.target.value as PatternType)}
              className="px-4 py-2 text-sm font-medium transition-colors bg-white border rounded-lg appearance-none cursor-pointer pr-10 border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            >
              {patterns.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
            <Settings className="absolute w-4 h-4 pointer-events-none right-3 top-3 text-slate-400" />
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 transition-colors rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};
