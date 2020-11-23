import isEmail from "./isEmail";

describe("isEmail", () => {
  [
    ["test 1", "aaaaaaaaaa@aaa.ru", true],
    ["test 2", "aaa_aaaa@aaaa.com", true],
    ["test 3", "AaAaAaA@aAaAa.aaaaa", true],
    ["test 4", "aaa.aaaaa@aaaaaa.aaaa", true],
    ["test 5", "", false],
    ["test 6", "some text", false],
    ["test 7", "aaaaaaaaaaaa@aaaaaaaaa", false],
    ["test 8", "@aaaaaaaaaa.aaa", false],
    ["test 9", "@", false],
  ].forEach((test) => {
    // eslint-disable-next-line jest/valid-title
    it(test[0], () => {
      expect(isEmail(test[1])).toBe(test[2]);
    });
  });
});
