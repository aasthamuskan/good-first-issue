import { twoPointersOptimized, twoPointersBruteForce } from '../algorithms/twoPointers';

describe('Two Pointers Algorithm', () => {
  const array = [1, 2, 3, 4, 6, 8, 9];
  const target = 10;

  test('optimized version should find the pair', () => {
    const steps = twoPointersOptimized({ array, target });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(1); // Found
    expect(lastStep.left).toBe(0); // 1
    expect(lastStep.right).toBe(6); // 9. Oh wait, 1+9=10.
  });

  test('brute force version should find the pair', () => {
    const steps = twoPointersBruteForce({ array, target });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(1);
  });

  test('should handle no pair found', () => {
    const steps = twoPointersOptimized({ array, target: 100 });
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBeUndefined();
  });
});
