import {
  isRightAngledTriangle,
  getCircumferenceAndAreaOfCircle,
  getQuadraticEquationRoots,
} from "./hw#9";

describe("isRightAngledTriangle", () => {
  [
    ["test 1", [6, 8, 10], true],
    ["test 2", [10, 8, 6], true],
    ["test 3", [5, 6, 7], false],
    ["test 4", [7, 6, 5], false],
  ].forEach((test) => {
    it(test[0], () => {
      const [a, b, c] = test[1];
      expect(isRightAngledTriangle(a, b, c)).toBe(test[2]);
    });
  });
});

describe("getCircumferenceAndAreaOfCircle", () => {
  [
    ["test 1", "0", ["0.00", "0.00"]],
    ["test 2", "2", ["12.57", "12.57"]],
    ["test 3", "3", ["18.85", "28.27"]],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(window, "prompt").mockImplementation(() => test[1]);
      jest.spyOn(console, "log");
      getCircumferenceAndAreaOfCircle();
      const [a, b] = test[2];
      expect(console.log).toHaveBeenCalledWith(a, b);
    });
  });
});

describe("getQuadraticEquationRoots", () => {
  [
    ["test 1", ["1", "-6", "9"], { x1: 3, x2: 3 }],
    ["test 2", ["1", "-3", "-4"], { x1: 4, x2: -1 }],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(window, "prompt").mockImplementation(() => test[1].shift());
      expect(getQuadraticEquationRoots()).toStrictEqual(test[2]);
    });
  });
});
