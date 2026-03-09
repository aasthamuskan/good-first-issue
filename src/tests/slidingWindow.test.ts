import { slidingWindowOptimized, slidingWindowBruteForce } from '../algorithms/slidingWindow';

describe('Sliding Window Algorithm', () => {
  const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
  const k = 3;

  test('optimized version should generate steps', () => {
    const steps = slidingWindowOptimized({ array, k });
    expect(steps.length).toBeGreaterThan(0);
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(13); // 4+1+8 = 13
  });

  test('brute force version should generate steps', () => {
    const steps = slidingWindowBruteForce({ array, k });
    expect(steps.length).toBeGreaterThan(0);
    const lastStep = steps[steps.length - 1];
    expect(lastStep.bestResult).toBe(13);
  });

  test('should handle array smaller than k', () => {
    const steps = slidingWindowOptimized({ array: [1, 2], k: 3 });
    expect(steps.length).toBe(0);
  });
});
