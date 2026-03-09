import { Step, AlgorithmParams } from './types';

/**
 * Binary Search Pattern
 * Visualizes Linear Search (Brute Force) and Binary Search (Optimized).
 */

export const binarySearchBruteForce = ({ array, target = 0 }: AlgorithmParams): Step[] => {
  const steps: Step[] = [];
  const n = array.length;

  for (let i = 0; i < n; i++) {
    const found = array[i] === target;
    steps.push({
      array,
      left: i,
      target,
      explanation: `Checking element at index ${i}: ${array[i]}. Does it match target ${target}?`,
    });

    if (found) {
      steps.push({
        array,
        left: i,
        target,
        bestResult: i,
        explanation: `Target ${target} found at index ${i}!`,
      });
      return steps;
    }
  }

  steps.push({
    array,
    target,
    explanation: `Target ${target} not found in the array.`,
  });

  return steps;
};

export const binarySearchOptimized = ({ array, target = 0 }: AlgorithmParams): Step[] => {
  const steps: Step[] = [];
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    steps.push({
      array,
      left,
      right,
      mid,
      target,
      explanation: `New search range: [${left}, ${right}]. Calculating mid: floor((${left} + ${right}) / 2) = ${mid}.`,
    });

    if (array[mid] === target) {
      steps.push({
        array,
        left,
        right,
        mid,
        target,
        bestResult: mid,
        explanation: `Target ${target} found at mid index ${mid}!`,
      });
      return steps;
    }

    if (array[mid] < target) {
      steps.push({
        array,
        left,
        right,
        mid,
        target,
        explanation: `${array[mid]} < ${target}. Target must be in the right half. Moving left boundary to ${mid + 1}.`,
      });
      left = mid + 1;
    } else {
      steps.push({
        array,
        left,
        right,
        mid,
        target,
        explanation: `${array[mid]} > ${target}. Target must be in the left half. Moving right boundary to ${mid - 1}.`,
      });
      right = mid - 1;
    }

    if (left <= right) {
      steps.push({
        array,
        left,
        right,
        target,
        explanation: `Invariant maintained: Target ${target} must lie within [${left}, ${right}] if it exists.`,
      });
    }
  }

  steps.push({
    array,
    target,
    explanation: `Search range is empty. Target ${target} not found.`,
  });

  return steps;
};
