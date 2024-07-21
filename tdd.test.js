import { capitalize } from './tdd.js';
import { reverseString } from './tdd.js';

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
