const isPalindrome = function (text) {

  const textAltered = text.toLowerCase().replace(/[^a-z]/gi, '');

  // reverse() doesn't work on string, only arrays
  // need to turn the string into an array and then reverse it
  // then join it back as as tring
  // return textAltered === textAltered.split('').reverse().join('')

  // another way two-pointer approach

  let i = 0
  let j = textAltered.length - 1 // last letter of string

  while (i < j ) {
    if (textAltered[i] != textAltered[j]) {
      return false
    } 
    i += 1;
    j -= 1;
  }

  return true

};

module.exports = isPalindrome;

