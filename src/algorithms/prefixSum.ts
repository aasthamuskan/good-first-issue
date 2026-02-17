import { Step, AlgorithmParams } from './types';

/**
 * Prefix Sum Pattern: Range Sum Query
 * Visualizes the construction of the prefix sum array.
 */

export const prefixSumBruteForce = ({ array, target = 0 }: AlgorithmParams): Step[] => {
  // We'll use 'target' as the end index for a range sum [0, target]
  const steps: Step[] = [];
  let currentSum = 0;
  const n = array.length;
  const endIdx = Math.min(target, n - 1);

  for (let i = 0; i <= endIdx; i++) {
    currentSum += array[i];
    steps.push({
      array,
      left: 0,
      right: i,
      currentSum,
      explanation: `Brute force: Summing elements from index 0 to ${i}. Current sum: ${currentSum}.`,
    });
  }

  return steps;
};

export const prefixSumOptimized = ({ array }: AlgorithmParams): Step[] => {
  const steps: Step[] = [];
  const n = array.length;
  const prefixArray: number[] = new Array(n).fill(0);

  steps.push({
    array: [...prefixArray],
    explanation: "Initializing empty prefix sum array.",
  });

  prefixArray[0] = array[0];
  steps.push({
    array: [...prefixArray],
    left: 0,
    right: 0,
    currentSum: prefixArray[0],
    explanation: `First element of prefix sum is just the first element of the array: ${prefixArray[0]}.`,
  });

  for (let i = 1; i < n; i++) {
    prefixArray[i] = prefixArray[i - 1] + array[i];
    steps.push({
      array: [...prefixArray],
      left: i - 1,
      right: i,
      currentSum: prefixArray[i],
      explanation: `prefix[${i}] = prefix[${i - 1}] (${prefixArray[i - 1]}) + array[i] (${array[i]}) = ${prefixArray[i]}.`,
    });
  }

  return steps;
};
