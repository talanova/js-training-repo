import getQuadraticEquationRoots from "./getQuadraticEquationRoot";

describe("getQuadraticEquationRoots", () => {
  it("test 1", () => {
    const a = 1;
    const b = -3;
    const c = -4;

    const expected = { x1: 4, x2: -1 };
    const roots = getQuadraticEquationRoots(a, b, c);

    expect(roots.x1).toBe(expected.x1);
    expect(roots.x2).toBe(expected.x2);
  });
});
