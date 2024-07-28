const capitalize = (string) => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return 'incorrect input';
};

const reverseString = (string) => {
  if (typeof string === 'string') {
    return string.split('').reverse().join('');
  }
  return 'incorrect input';
};

const calculator = {
  add: (a, b) => {
    return +a + +b;
  },
  subtract: (a, b) => {
    return +a - +b;
  },
  multiply: (a, b) => {
    return +a * +b;
  },
  divide: (a, b) => {
    return +a / +b;
  },
};

const caesarCipher = (input, shift) => {
  if (typeof input !== 'string') {
    return 'Invalid input';
  }
  // Helper function to shift a single character.
  const shiftChar = (char, shift) => {
    // Get the ASCII code of the character.
    const code = char.charCodeAt(0);

    // Check if the character is an uppercase letter.
    if (code >= 65 && code <= 90) {
      // Shift the character, wrapping around from Z to A if necessary.
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    // Check if the character is a lowercase letter.
    else if (code >= 97 && code <= 122) {
      // Shift the character, wrapping around from z to a if necessary.
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    // If the character is not a letter, return it unchanged.
    else {
      return char;
    }
  };

  // Use the helper function to shift each character in the input string.
  return input
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
};

const analyzeArray = (array) => {
  let isAllNumbers = true;
  const result = {};
  if (!Array.isArray(array)) {
    return 'Invalid input';
  }
  array.forEach((input) => {
    if (typeof input !== 'number') {
      isAllNumbers = false;
    }
  });
  if (!isAllNumbers) {
    return 'All the inputs of the array needs to be numbers';
  }
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  result.average = average;
  result.min = min;
  result.max = max;
  result.length = length;

  return result;
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
