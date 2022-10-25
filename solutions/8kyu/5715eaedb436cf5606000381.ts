// https://www.codewars.com/kata/5715eaedb436cf5606000381

export function positiveSum(arr: number[]): number {
  return arr.reduce((sum, current) => current > 0 ? sum + current : sum, 0);
}