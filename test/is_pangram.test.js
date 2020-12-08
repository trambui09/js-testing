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
    const text = 'aBcDefghijklmnopqrstuvwxyz';

    // Act - where the function/method is called on
    const result = isPangram(text);

    // Assert
    expect(result).toEqual(true);

  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeFalsy();

  });

  test('empty sentence', () => {
    // Arrange
    const text = '';

    // Act

    // Assert
    expect(isPangram(text)).toBeFalsy();

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    // Act

    // Assert
    expect(isPangram(text)).toBeTruthy();

  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz123';

    // Act

    result = isPangram(text);

    // Assert
    expect(result).toEqual(true);

  });

  // Write your own test case
});
