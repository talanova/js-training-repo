export function isRightAngledTriangle(a, b, c) {
  const sideC = Math.max(a, b, c);
  const sideA = a === sideC ? c : a;
  const sideB = b === sideC ? c : b;
  return sideC ** 2 === sideA ** 2 + sideB ** 2;
}

function getCircumference(r) {
  return 2 * Math.PI * r;
}

function getAreaOfCircle(r) {
  return Math.PI * r ** 2;
}

export function getCircumferenceAndAreaOfCircle() {
  const r = +prompt("Enter circle radius:");
  if (isNaN(r) || r < 0) {
    return;
  }

  console.log(getCircumference(r).toFixed(2), getAreaOfCircle(r).toFixed(2));
}

function getDiscriminant(a, b, c) {
  return b ** 2 - 4 * a * c;
}

function calcQuadraticEquationRoots(a, b, c) {
  const d = Math.sqrt(getDiscriminant(a, b, c));
  const x1 = (-b + d) / (2 * a);
  console.log(x1);
  const x2 = (-b - d) / (2 * a);
  console.log(x2);
  return { x1, x2 };
}

export function getQuadraticEquationRoots() {
  const a = +prompt("Enter a coefficient: ");
  if (isNaN(a)) {
    return null;
  }
  const b = +prompt("Enter a coefficient: ");
  if (isNaN(b)) {
    return null;
  }
  const c = +prompt("Enter a coefficient: ");
  if (isNaN(c)) {
    return null;
  }
  console.log(a, b, c);
  return calcQuadraticEquationRoots(a, b, c);
}
