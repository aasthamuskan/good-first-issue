export const PATTERN_METADATA = {
  SLIDING_WINDOW: {
    title: 'Sliding Window',
    description: 'The Sliding Window pattern is used to perform a required operation on a specific window size of a given array or linked list.',
    bruteForceCode: `
<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = 0; i &lt;= n - k; i++) {
  <span class="text-blue-400">let</span> currentSum = 0;
  <span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> j = i; j &lt; i + k; j++) {
    currentSum += array[j];
  }
  best = Math.max(best, currentSum);
}`,
    optimizedCode: `
<span class="text-blue-400">let</span> currentSum = 0;
<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = 0; i &lt; k; i++) currentSum += array[i];
best = currentSum;

<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = k; i &lt; n; i++) {
  currentSum += array[i] - array[i - k];
  best = Math.max(best, currentSum);
}`,
  },
  TWO_POINTERS: {
    title: 'Two Pointers',
    description: 'In problems where we deal with sorted arrays (or linked lists) and need to find a set of elements that fulfill certain constraints, the Two Pointers approach is very efficient.',
    bruteForceCode: `
<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = 0; i &lt; n; i++) {
  <span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> j = i + 1; j &lt; n; j++) {
    <span class="text-blue-400">if</span> (array[i] + array[j] === target) <span class="text-blue-400">return</span> [i, j];
  }
}`,
    optimizedCode: `
<span class="text-blue-400">let</span> left = 0, right = n - 1;
<span class="text-blue-400">while</span> (left &lt; right) {
  <span class="text-blue-400">const</span> sum = array[left] + array[right];
  <span class="text-blue-400">if</span> (sum === target) <span class="text-blue-400">return</span> [left, right];
  <span class="text-blue-400">else if</span> (sum &lt; target) left++;
  <span class="text-blue-400">else</span> right--;
}`,
  },
  PREFIX_SUM: {
    title: 'Prefix Sum',
    description: 'Prefix Sum involves pre-computing the cumulative sum of an array to allow for O(1) range sum queries.',
    bruteForceCode: `
<span class="text-blue-400">let</span> sum = 0;
<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = 0; i &lt;= target; i++) {
  sum += array[i];
}
<span class="text-blue-400">return</span> sum;`,
    optimizedCode: `
<span class="text-blue-400">const</span> prefix = <span class="text-blue-400">new</span> Array(n);
prefix[0] = array[0];
<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = 1; i &lt; n; i++) {
  prefix[i] = prefix[i - 1] + array[i];
}
<span class="text-blue-400">return</span> prefix[target];`,
  },
  BINARY_SEARCH: {
    title: 'Binary Search',
    description: 'Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item.',
    bruteForceCode: `
<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = 0; i &lt; n; i++) {
  <span class="text-blue-400">if</span> (array[i] === target) <span class="text-blue-400">return</span> i;
}
<span class="text-blue-400">return</span> -1;`,
    optimizedCode: `
<span class="text-blue-400">let</span> left = 0, right = n - 1;
<span class="text-blue-400">while</span> (left &lt;= right) {
  <span class="text-blue-400">const</span> mid = Math.floor((left + right) / 2);
  <span class="text-blue-400">if</span> (array[mid] === target) <span class="text-blue-400">return</span> mid;
  <span class="text-blue-400">if</span> (array[mid] &lt; target) left = mid + 1;
  <span class="text-blue-400">else</span> right = mid - 1;
}
<span class="text-blue-400">return</span> -1;`,
  },
};
