export function f51(arr) {
  let sum = 0;
  // eslint-disable-next-line no-return-assign
  arr.forEach((x) => (sum += x));
  console.log(sum);
}

export function f52(arr) {
  return arr.map((x) => {
    return x * 2;
  });
}

export function f53(arr) {
  arr.sort((x, y) => x - y);
  console.log(arr.shift(), arr.pop());
}
