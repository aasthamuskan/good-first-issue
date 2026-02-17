export const COMPLEXITY_DATA = {
  SLIDING_WINDOW: {
    BRUTE_FORCE: {
      time: 'O(N * K)',
      space: 'O(1)',
      invariant: 'Check all possible subarrays of size K independently.',
    },
    OPTIMIZED: {
      time: 'O(N)',
      space: 'O(1)',
      invariant: 'Maintain a sum of the window and slide it by adding one element and removing one element.',
    },
  },
  TWO_POINTERS: {
    BRUTE_FORCE: {
      time: 'O(N²)',
      space: 'O(1)',
      invariant: 'Check every possible pair of elements in the array.',
    },
    OPTIMIZED: {
      time: 'O(N)',
      space: 'O(1)',
      invariant: 'For a sorted array, moving pointers inward based on the current sum reduces the search space linearly.',
    },
  },
  PREFIX_SUM: {
    BRUTE_FORCE: {
      time: 'O(N)',
      space: 'O(1)',
      invariant: 'Iterate from the start to the target index for every query.',
    },
    OPTIMIZED: {
      time: 'O(N) precompute, O(1) query',
      space: 'O(N)',
      invariant: 'P[i] = A[0] + ... + A[i]. Range sum [L, R] = P[R] - P[L-1].',
    },
  },
};
