export default function isRightAngledTriangle(a, b, c) {
  const sideC = Math.max(a, b, c);
  const sideA = a === sideC ? c : a;
  const sideB = b === sideC ? c : b;
  return sideC ** 2 === sideA ** 2 + sideB ** 2;
}
