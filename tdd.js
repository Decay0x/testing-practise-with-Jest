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

export { capitalize, reverseString };
