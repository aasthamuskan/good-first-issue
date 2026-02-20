import { Step, AlgorithmParams } from './types';
import { slidingWindowBruteForce, slidingWindowOptimized } from './slidingWindow';
import { twoPointersBruteForce, twoPointersOptimized } from './twoPointers';
import { prefixSumBruteForce, prefixSumOptimized } from './prefixSum';
import { binarySearchBruteForce, binarySearchOptimized } from './binarySearch';

export type PatternType = 'SLIDING_WINDOW' | 'TWO_POINTERS' | 'PREFIX_SUM' | 'BINARY_SEARCH';
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
    case 'BINARY_SEARCH':
      return mode === 'BRUTE_FORCE'
        ? binarySearchBruteForce(params)
        : binarySearchOptimized(params);
    default:
      return [];
  }
};
