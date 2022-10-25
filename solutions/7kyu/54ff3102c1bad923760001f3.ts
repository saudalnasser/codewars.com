// https://www.codewars.com/kata/54ff3102c1bad923760001f3

export class Kata {
  public static getCount(str: string): number {
    const vowels = 'aeiou';
    return [...str].reduce((count, letter) => (vowels.includes(letter) ? count + 1 : count), 0);
  }
}
