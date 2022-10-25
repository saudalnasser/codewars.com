// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

export function findSmallestInt(args: number[]): number {
  return args.reduce((previous, current) => current < previous ? current : previous);
}