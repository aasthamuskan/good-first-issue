export const parseArrayInput = (input: string): number[] => {
  return input
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s !== '')
    .map((s) => parseInt(s, 10))
    .filter((n) => !isNaN(n));
};
