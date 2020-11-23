function getDiscriminant(a, b, c) {
  return b ** 2 - 4 * a * c;
}

export default function getQuadraticEquationRoots(a, b, c) {
  const d = Math.sqrt(getDiscriminant(a, b, c));
  const x1 = (-b + d) / (2 * a);
  const x2 = (-b - d) / (2 * a);
  return { x1, x2 };
}
