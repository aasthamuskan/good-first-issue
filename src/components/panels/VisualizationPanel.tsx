import React from 'react';
import { Step } from '../../algorithms/types';
import { ArrayBlock } from '../ui/ArrayBlock';
import { Pointer } from '../ui/Pointer';

interface VisualizationPanelProps {
  currentStep: Step | null;
}

export const VisualizationPanel: React.FC<VisualizationPanelProps> = ({
  currentStep,
}) => {
  if (!currentStep) {
    return (
      <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-xl border-slate-200 dark:border-slate-800">
        <p className="text-slate-400">Run an algorithm to start visualization</p>
      </div>
    );
  }

  const { array, left, right, mid, currentSum, bestResult, explanation } = currentStep;

  return (
    <div className="space-y-8">
      <div className="p-8 bg-white border rounded-xl dark:bg-slate-900 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="flex items-end justify-center h-48 gap-3 overflow-x-auto pb-8">
          {array.map((val, idx) => {
            const isLeft = left === idx;
            const isRight = right === idx;
            const isMid = mid === idx;
            const isInWindow = left !== undefined && right !== undefined && idx >= left && idx <= right;

            return (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="relative">
                  <ArrayBlock
                    value={val}
                    isActive={isLeft || isRight || isMid}
                    isHighlighted={isInWindow}
                  />
                  {(isLeft || isRight || isMid) && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <Pointer
                        label={
                          [
                            isLeft ? 'L' : null,
                            isMid ? 'M' : null,
                            isRight ? 'R' : null
                          ].filter(Boolean).join('/')
                        }
                        colorClass={isMid ? 'text-purple-500' : isLeft ? 'text-blue-500' : 'text-red-500'}
                      />
                    </div>
                  )}
                </div>
                <span className="text-xs font-mono text-slate-400">{idx}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
          <span className="block text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">Current Value / Sum</span>
          <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {currentSum !== undefined ? currentSum : '—'}
          </span>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
          <span className="block text-xs font-semibold uppercase text-green-600 dark:text-green-400">Result / Index</span>
          <span className="text-2xl font-bold text-green-700 dark:text-green-300">
            {bestResult !== undefined ? bestResult : '—'}
          </span>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Step Explanation</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {explanation || 'Processing...'}
        </p>
      </div>
    </div>
  );
};
