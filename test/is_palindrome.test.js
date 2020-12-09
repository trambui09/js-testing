// what is this doing?
const isPalindrome = require('../src/is_palindrome');
const isPangram = require('../src/is_pangram');

describe('isPalindrome()', () => {

  test('isPalindrome() is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works with a palindrome with lower case', () => {
    const text = 'racecar';

    // assert
    expect(isPalindrome(text)).toEqual(true);
  })

  test('can ignore whitespaces and punctaction', () => {
    const text = 'too hot to hoot.';

    expect(isPalindrome(text)).toEqual(true);
  });

  test('return false if it is not a palindrome', () => {
    const text = 'tram bui'

    expect(isPalindrome(text)).toBeFalsy();

  })

  test('it is case insensitive', () => {
    const text = 'RacEcar'

    expect(isPalindrome(text)).toBeTruthy();

  })
})