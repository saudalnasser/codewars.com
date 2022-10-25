// https://www.codewars.com/kata/52fba66badcd10859f00097e

export class Kata {
  public static disemvowel(str: string): string {
    return str.replace(/[aeiou]/ig, '');
  }
}