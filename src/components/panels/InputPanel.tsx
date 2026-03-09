import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { PatternType } from '../../algorithms/stepGenerator';

interface InputPanelProps {
  pattern: PatternType;
  onRun: (array: number[], k: number, target: number) => void;
  onReset: () => void;
  disabled?: boolean;
}

export const InputPanel: React.FC<InputPanelProps> = ({
  pattern,
  onRun,
  onReset,
  disabled = false,
}) => {
  const [arrayStr, setArrayStr] = useState('1, 3, 2, 5, 8, 1, 3');
  const [k, setK] = useState(3);
  const [target, setTarget] = useState(10);

  const handleRun = () => {
    const array = arrayStr.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
    onRun(array, k, target);
  };

  return (
    <div className="p-6 bg-white border rounded-xl dark:bg-slate-900 dark:border-slate-800 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Parameters</h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Array (comma separated)
          </label>
          <input
            type="text"
            value={arrayStr}
            onChange={(e) => setArrayStr(e.target.value)}
            className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
            placeholder="e.g. 1, 2, 3"
            disabled={disabled}
          />
        </div>

        {pattern === 'SLIDING_WINDOW' && (
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Window Size (k)
            </label>
            <input
              type="number"
              value={k}
              onChange={(e) => setK(parseInt(e.target.value, 10))}
              className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              disabled={disabled}
            />
          </div>
        )}

        {(pattern === 'TWO_POINTERS' || pattern === 'PREFIX_SUM') && (
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              {pattern === 'TWO_POINTERS' ? 'Target Sum' : 'End Index'}
            </label>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(parseInt(e.target.value, 10))}
              className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              disabled={disabled}
            />
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <button
            onClick={handleRun}
            disabled={disabled}
            className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-bold text-white transition-all rounded-lg bg-primary-600 hover:bg-primary-700 active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            <Play size={16} fill="currentColor" />
            <span>Run</span>
          </button>
          <button
            onClick={onReset}
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold transition-all border rounded-lg text-slate-700 border-slate-200 hover:bg-slate-50 active:scale-95 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};
