// https://www.codewars.com/kata/546e2562b03326a88e000020

export class Kata {
  public static squareDigits(num: number): number {
    return Number([...num.toString()].map((n) => Math.pow(Number(n), 2)).join(''));
  }
}
