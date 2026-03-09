import { binarySearchOptimized, binarySearchBruteForce } from '../algorithms/binarySearch';

describe('Binary Search Algorithm', () => {
  const array = [1, 2, 4, 6, 8, 10, 12, 14, 16];

  test('optimized version should find target present', () => {
    const steps = binarySearchOptimized({ array, target: 10 });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(5);
  });

  test('optimized version should handle target absent', () => {
    const steps = binarySearchOptimized({ array, target: 7 });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBeUndefined();
  });

  test('optimized version should handle single element array (found)', () => {
    const steps = binarySearchOptimized({ array: [5], target: 5 });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(0);
  });

  test('optimized version should find target at first index', () => {
    const steps = binarySearchOptimized({ array, target: 1 });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(0);
  });

  test('optimized version should find target at last index', () => {
    const steps = binarySearchOptimized({ array, target: 16 });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(8);
  });

  test('brute force version should find target', () => {
    const steps = binarySearchBruteForce({ array, target: 10 });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(5);
  });
});
