export function getDiff(a, b) {
  return Math.abs(a - b);
}

export function isOneWord(input) {
  if (typeof input !== "string") {
    return false;
  }
  if (input.length === 0 || /^\s*$/.test(input)) {
    return false;
  }
  return input.split(/[\s\\?\\,\\.!:;]+/).length === 1;
}

export function getPow(a, x) {
  return a ** x;
}
