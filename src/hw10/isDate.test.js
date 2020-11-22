import isDate from "./isDate";

describe("isDate", () => {
  [
    ["test 1", "22 11 2020", true],
    ["test 2", "22.11.2020", true],
    ["test 3", "22/11/2020", true],
    ["test 4", "22-11-2020", true],
    ["test 5", "", false],
    ["test 6", "some text", false],
    ["test 7", "12345678", false],
  ].forEach((test) => {
    it(test[0], () => {
      expect(isDate(test[1])).toBe(test[2]);
    });
  });
});
