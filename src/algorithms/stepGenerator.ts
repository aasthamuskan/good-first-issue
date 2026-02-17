import { Step, AlgorithmParams } from './types';
import { slidingWindowBruteForce, slidingWindowOptimized } from './slidingWindow';
import { twoPointersBruteForce, twoPointersOptimized } from './twoPointers';
import { prefixSumBruteForce, prefixSumOptimized } from './prefixSum';

export type PatternType = 'SLIDING_WINDOW' | 'TWO_POINTERS' | 'PREFIX_SUM';
export type AlgorithmMode = 'BRUTE_FORCE' | 'OPTIMIZED';

export const generateSteps = (
  pattern: PatternType,
  mode: AlgorithmMode,
  params: AlgorithmParams
): Step[] => {
  switch (pattern) {
    case 'SLIDING_WINDOW':
      return mode === 'BRUTE_FORCE'
        ? slidingWindowBruteForce(params)
        : slidingWindowOptimized(params);
    case 'TWO_POINTERS':
      return mode === 'BRUTE_FORCE'
        ? twoPointersBruteForce(params)
        : twoPointersOptimized(params);
    case 'PREFIX_SUM':
      return mode === 'BRUTE_FORCE'
        ? prefixSumBruteForce(params)
        : prefixSumOptimized(params);
    default:
      return [];
  }
};
