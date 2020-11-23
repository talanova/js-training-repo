import getCircumference from "./getCircumference";

describe("getCircumference", () => {
  [
    ["test 1", 0, 0.0],
    ["test 2", 2, 12.57],
    ["test 3", 3, 18.85],
  ].forEach((test) => {
    // eslint-disable-next-line jest/valid-title
    it(test[0], () => {
      expect(getCircumference(test[1]).toFixed(2)).toBe(test[2].toFixed(2));
    });
  });
});
