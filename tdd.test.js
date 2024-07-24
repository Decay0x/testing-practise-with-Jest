import { capitalize } from './tdd.js';
import { reverseString } from './tdd.js';
import { calculator } from './tdd.js';
import { caesarCipher } from './tdd.js';

/* capitalize string tests */
test('capitalize exists', () => {
  expect(capitalize).toBeDefined();
});

test('parameter is a string', () => {
  const parameter = 1;
  expect(capitalize(parameter)).toBe('incorrect input');
});

test('takes a string and return the string capitalized', () => {
  const string = 'hello jest';
  expect(capitalize(string)).toBe('Hello jest');
});

/* reverse string tests */
test('reverseString exists', () => {
  expect(reverseString).toBeDefined();
});

test('parameter is a string for reverseString', () => {
  const parameter = 1;
  expect(reverseString(parameter)).toBe('incorrect input');
});

test('reverse the string', () => {
  const parameter = 'Hello jest!';
  expect(reverseString(parameter)).toBe('!tsej olleH');
});

/* calculator tests */
test('calculator exists', () => {
  expect(calculator).toBeDefined();
});

// add method
test('calculator has add', () => {
  expect(calculator.add).toBeDefined();
});

test('calculator takes two numbers and returns the sum', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('add takes a string as input', () => {
  expect(calculator.add('2', 3)).toBe(5);
});

test('add takes boolean as input', () => {
  expect(calculator.add(true, 4)).toBe(5);
});

test('add takes undefined input returns NaN', () => {
  expect(calculator.add(undefined, 4)).toBe(NaN);
});

// subtract method
test('calculator has subtract', () => {
  expect(calculator.subtract).toBeDefined();
});

test('calculator takes two numbers and returns the difference', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('subtract takes a string as input', () => {
  expect(calculator.subtract('2', 3)).toBe(-1);
});

test('subtract takes boolean as input', () => {
  expect(calculator.subtract(true, 4)).toBe(-3);
});

test('subtract takes undefined input returns NaN', () => {
  expect(calculator.subtract(undefined, 4)).toBe(NaN);
});

// multiply method
test('calculator has multiply', () => {
  expect(calculator.multiply).toBeDefined();
});

test('calculator takes two numbers and returns the difference', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('multiply takes a string as input', () => {
  expect(calculator.multiply('2', 3)).toBe(6);
});

test('multiply takes boolean as input', () => {
  expect(calculator.multiply(true, 4)).toBe(4);
});

test('multiply takes undefined input returns NaN', () => {
  expect(calculator.multiply(undefined, 4)).toBe(NaN);
});

// divide method
test('calculator has divide', () => {
  expect(calculator.divide).toBeDefined();
});

test('calculator takes two numbers and returns the difference', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('divide takes a string as input', () => {
  expect(calculator.divide('2', 3)).toBeCloseTo(0.66666);
});

test('divide takes boolean as input', () => {
  expect(calculator.divide(true, 4)).toBeCloseTo(0.25);
});

test('divide takes undefined input returns NaN', () => {
  expect(calculator.divide(undefined, 4)).toBe(NaN);
});

/* ceasar cipher */
test('ceasarCipher function exists', () => {
  expect(caesarCipher).toBeDefined();
});
