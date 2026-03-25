function isValidPassword(password) {
  if (!password) return false;

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasNumber
  );
}

module.exports = { isValidPassword };
