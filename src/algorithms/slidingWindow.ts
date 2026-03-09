import { Step, AlgorithmParams } from './types';

/**
 * Sliding Window Pattern: Maximum Sum Subarray of size K
 */

export const slidingWindowBruteForce = ({ array, k = 3 }: AlgorithmParams): Step[] => {
  const steps: Step[] = [];
  let bestResult = -Infinity;
  const n = array.length;

  for (let i = 0; i <= n - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += array[j];
      steps.push({
        array,
        left: i,
        right: j,
        currentSum,
        bestResult: bestResult === -Infinity ? undefined : bestResult,
        explanation: `Brute force: Adding element at index ${j} to current window starting at ${i}.`,
      });
    }

    if (currentSum > bestResult) {
      bestResult = currentSum;
    }

    steps.push({
      array,
      left: i,
      right: i + k - 1,
      currentSum,
      bestResult,
      explanation: `Finished window [${i}, ${i + k - 1}]. Current sum: ${currentSum}. Best so far: ${bestResult}.`,
    });
  }

  return steps;
};

export const slidingWindowOptimized = ({ array, k = 3 }: AlgorithmParams): Step[] => {
  const steps: Step[] = [];
  let bestResult = -Infinity;
  let currentSum = 0;
  const n = array.length;

  if (n < k) return [];

  // Initial window
  for (let i = 0; i < k; i++) {
    currentSum += array[i];
    steps.push({
      array,
      left: 0,
      right: i,
      currentSum,
      bestResult: undefined,
      explanation: `Initializing window: Adding element at index ${i}.`,
    });
  }

  bestResult = currentSum;
  steps.push({
    array,
    left: 0,
    right: k - 1,
    currentSum,
    bestResult,
    explanation: `Initial window sum: ${currentSum}.`,
  });

  // Slide window
  for (let i = k; i < n; i++) {
    const prevElement = array[i - k];
    currentSum = currentSum - prevElement + array[i];

    steps.push({
      array,
      left: i - k + 1,
      right: i,
      currentSum,
      bestResult,
      explanation: `Sliding: Subtracting ${prevElement} (index ${i - k}) and adding ${array[i]} (index ${i}).`,
    });

    if (currentSum > bestResult) {
      bestResult = currentSum;
      steps.push({
        array,
        left: i - k + 1,
        right: i,
        currentSum,
        bestResult,
        explanation: `New best result found: ${bestResult}!`,
      });
    }
  }

  return steps;
};
