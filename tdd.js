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

const caesarCipher = (str, shift) => {
  return str;
};

export { capitalize, reverseString, calculator, caesarCipher };

caesarCipher();
