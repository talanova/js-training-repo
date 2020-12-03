import { getDiff, isOneWord, getPow } from "./hw#6";

describe("getDiff", () => {
  [
    ["test 1", [1, 10], 9],
    ["test 2", [10, 1], 9],
    ["test 3", [1, 1], 0],
  ].forEach((test) => {
    // eslint-disable-next-line jest/valid-title
    it(test[0], () => {
      const [a, b] = test[1];
      expect(getDiff(a, b)).toBe(test[2]);
    });
  });
});

describe("isOneWord", () => {
  [
    ["test 1", "мама мыла раму", false],
    ["test 2", "в огороде бузина, а в киеве дядька", false],
    ["test 3", "           ", false],
    ["test 4", "", false],
    ["test 5", 123, false],
    ["test 6", "мама", true],
  ].forEach((test) => {
    // eslint-disable-next-line jest/valid-title
    it(test[0], () => {
      expect(isOneWord(test[1])).toBe(test[2]);
    });
  });
});

describe("getPow", () => {
  [
    ["test 1", [1, 10], 1],
    ["test 2", [2, 2], 4],
    ["test 3", [3, 3], 27],
  ].forEach((test) => {
    // eslint-disable-next-line jest/valid-title
    it(test[0], () => {
      const [a, b] = test[1];
      expect(getPow(a, b)).toBe(test[2]);
    });
  });
});
