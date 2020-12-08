const isPangram = function(text) {
  // convert string to contain only letters and change it to all lowercase
  let str = text.toLowerCase().replace(/[^a-z]/gi, '');

  // hash map the string 
  let hash = {}

  // loop through the text and populate the hash
  for (let char of str) {
    // if (hash[char]) { // key is in hash object, increment v
    //   hash[char] += 1;

    // } else {
    //   hash[char] = 1;
    // }

    // ternary 
    hash[char] ? hash[char] += 1 : hash[char] = 1
  }
  // check if the hash has 26 keys?

  return Object.keys(hash).length === 26;

};

module.exports = isPangram;
