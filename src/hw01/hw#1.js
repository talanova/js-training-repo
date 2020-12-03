export function f11(a, b) {
  console.log(a + b);
  console.log(a * b);
}

export function f12(a, b) {
  console.log(a.length + b.length);
}

export function f13() {
  const value = Number(window.prompt("Enter a three-digit number:"));
  if (isNaN(value) || value < 100 || value > 999) {
    return;
  }
  console.log(
    value
      .toString()
      .split("")
      .reduce((sum, current) => sum + Number(current), 0)
  );
}
