export function f31() {
  let sum = 0;
  for (let i = 50; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}

export function f32() {
  for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}

export function f33() {
  const value = Number(window.prompt("Enter a number greater than 0:"));
  if (isNaN(value) || value < 1) {
    return;
  }

  let counter = 0;
  let sum = 0;

  for (let i = 1; i <= value; i++) {
    if (i % 2 !== 0) {
      sum += i;
      counter++;
    }
  }

  console.log(sum / counter);
}
