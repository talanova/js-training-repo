import isRightAngledTriangle from "./isRightAngledTriangle";

describe("isRightAngledTriangle", () => {
  [
    ["test 1", [6, 8, 10], true],
    ["test 2", [10, 8, 6], true],
    ["test 3", [5, 6, 7], false],
    ["test 4", [7, 6, 5], false],
  ].forEach((test) => {
    // eslint-disable-next-line jest/valid-title
    it(test[0], () => {
      const [a, b, c] = test[1];
      expect(isRightAngledTriangle(a, b, c)).toBe(test[2]);
    });
  });
});
