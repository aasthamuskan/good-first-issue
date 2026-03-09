import { Step, AlgorithmParams } from './types';

/**
 * Two Pointers Pattern: Two Sum on Sorted Array
 * Finds if there are two numbers that add up to a target.
 */

export const twoPointersBruteForce = ({ array, target = 0 }: AlgorithmParams): Step[] => {
  const steps: Step[] = [];
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const currentSum = array[i] + array[j];
      const found = currentSum === target;

      steps.push({
        array,
        left: i,
        right: j,
        currentSum,
        explanation: `Checking pair (${array[i]}, ${array[j]}) at indices ${i} and ${j}.`,
      });

      if (found) {
        steps.push({
          array,
          left: i,
          right: j,
          currentSum,
          bestResult: 1, // Using 1 as a flag for "found" or similar
          explanation: `Found target sum ${target} at indices ${i} and ${j}!`,
        });
        return steps;
      }
    }
  }

  return steps;
};

export const twoPointersOptimized = ({ array, target = 0 }: AlgorithmParams): Step[] => {
  const steps: Step[] = [];
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];

    steps.push({
      array,
      left,
      right,
      currentSum,
      explanation: `Evaluating sum of array[${left}] (${array[left]}) and array[${right}] (${array[right]}).`,
    });

    if (currentSum === target) {
      steps.push({
        array,
        left,
        right,
        currentSum,
        bestResult: 1,
        explanation: `Target ${target} reached! Indices: ${left}, ${right}.`,
      });
      return steps;
    }

    if (currentSum < target) {
      steps.push({
        array,
        left,
        right,
        currentSum,
        explanation: `${currentSum} < ${target}, so we move the left pointer right to increase the sum.`,
      });
      left++;
    } else {
      steps.push({
        array,
        left,
        right,
        currentSum,
        explanation: `${currentSum} > ${target}, so we move the right pointer left to decrease the sum.`,
      });
      right--;
    }
  }

  steps.push({
    array,
    explanation: `No pair found that sums to ${target}.`,
  });

  return steps;
};
