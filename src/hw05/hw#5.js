const firstArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export function f51(arr) {
  let sum = 0;
  // eslint-disable-next-line no-return-assign
  arr.forEach((x) => (sum += x));
  console.log(sum);
}

f51(firstArr);

export function f52(arr) {
  return arr.map((x) => {
    return x * 2;
  });
}

const secondArr = f52(firstArr);
console.log(secondArr);

export function f53(arr) {
  let min = null;
  let max = null;

  arr.forEach((x) => {
    if (min === null) {
      min = x;
    } else {
      min = x < min ? x : min;
    }

    if (max === null) {
      max = x;
    } else {
      max = x > max ? x : max;
    }
  });
  console.log(min, max);
}

f53(firstArr);
