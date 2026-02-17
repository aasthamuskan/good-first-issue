import { prefixSumOptimized, prefixSumBruteForce } from '../algorithms/prefixSum';

describe('Prefix Sum Algorithm', () => {
  const array = [1, 2, 3, 4, 5];

  test('optimized version should correctly construct prefix sum array', () => {
    const steps = prefixSumOptimized({ array });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.array).toEqual([1, 3, 6, 10, 15]);
  });

  test('brute force version should correctly calculate sum up to target', () => {
    const steps = prefixSumBruteForce({ array, target: 2 });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.currentSum).toBe(6); // 1 + 2 + 3 = 6
  });
});
