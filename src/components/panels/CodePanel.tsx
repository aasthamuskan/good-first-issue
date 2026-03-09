import React from 'react';
import { Code2, Zap } from 'lucide-react';
import { AlgorithmMode } from '../../algorithms/stepGenerator';

interface CodePanelProps {
  mode: AlgorithmMode;
  onModeChange: (mode: AlgorithmMode) => void;
  bruteForceCode: string;
  optimizedCode: string;
}

export const CodePanel: React.FC<CodePanelProps> = ({
  mode,
  onModeChange,
  bruteForceCode,
  optimizedCode,
}) => {
  const currentCode = mode === 'BRUTE_FORCE' ? bruteForceCode : optimizedCode;

  return (
    <div className="flex flex-col h-full bg-slate-900 rounded-xl border border-slate-800 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-primary-500" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Algorithm Implementation</span>
        </div>
        <div className="flex bg-slate-800 p-1 rounded-md">
          <button
            onClick={() => onModeChange('BRUTE_FORCE')}
            className={`px-3 py-1 text-xs font-bold rounded transition-all ${
              mode === 'BRUTE_FORCE'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Brute Force
          </button>
          <button
            onClick={() => onModeChange('OPTIMIZED')}
            className={`px-3 py-1 text-xs font-bold rounded transition-all flex items-center gap-1 ${
              mode === 'OPTIMIZED'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap size={12} fill={mode === 'OPTIMIZED' ? 'currentColor' : 'none'} />
            Optimized
          </button>
        </div>
      </div>

      <div className="p-4 flex-1 overflow-auto font-mono text-sm">
        <pre className="text-slate-300">
          <code dangerouslySetInnerHTML={{ __html: currentCode }} />
        </pre>
      </div>
    </div>
  );
};
