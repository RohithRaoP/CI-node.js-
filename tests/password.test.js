const { isValidPassword } = require('../src/password');

test('valid password', () => {
  expect(isValidPassword('Password1')).toBe(true);
});

test('too short', () => {
  expect(isValidPassword('Pass1')).toBe(false);
});

test('no uppercase', () => {
  expect(isValidPassword('password1')).toBe(false);
});

test('no number', () => {
  expect(isValidPassword('Password')).toBe(false);
});
