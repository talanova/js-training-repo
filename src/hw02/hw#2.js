export function f21(a, b) {
  console.log(a > b ? a : b);
}

export function f22() {
  const value = +prompt("Enter a number from 1 to 12:");
  if (isNaN(value) || value < 1 || value > 12) {
    return;
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(monthNames[value - 1]);
}

export function f23(circle, square) {
  const circleDiameter = Math.sqrt(circle / Math.PI) * 2;
  const squareSide = Math.sqrt(square);
  console.log(squareSide >= circleDiameter);
}
