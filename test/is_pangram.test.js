const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const result = isPangram(text);


    // Assert
    // expect(isPangram(text)).toEqual(true);
    expect(result).toBeTruthy();
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz'

    // Act - where the function/method is called on
    const result = isPangram(text);

    // Assert
    expect(result).toEqual(true);

  });

  test.skip("missing character 'x'", () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz'

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeFalsy();

  });

  test.skip('empty sentence', () => {
    // Arrange
    const text = ''

    // Act

    // Assert
    expect(isPangram(text)).toBeFalsy();

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange

    // Act

    // Assert

  });

  test('pangram with numbers', () => {
    // Arrange

    // Act

    // Assert

  });

  // Write your own test case
});
