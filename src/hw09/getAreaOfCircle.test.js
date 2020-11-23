import getAreaOfCircle from "./getAreaOfCircle";

describe("getAreaOfCircle", () => {
  [
    ["test 1", 0, 0],
    ["test 2", 2, 12.57],
    ["test 3", 3, 28.27],
  ].forEach((test) => {
    // eslint-disable-next-line jest/valid-title
    it(test[0], () => {
      expect(getAreaOfCircle(test[1]).toFixed(2)).toBe(test[2].toFixed(2));
    });
  });
});
