import isRusPhoneNumber from "./isRusPhoneNumber";

describe("isRusPhoneNumber", () => {
  [
    ["test 1", "89215930353", true],
    ["test 2", "8 921 593 03 53", true],
    ["test 3", "8-921-593-03-53", true],
    ["test 4", "8 (921) 593-03-53", true],
    ["test 5", "+79215930353", true],
    ["test 6", "+7 921 593 03 53", true],
    ["test 7", "+7-921-593-03-53", true],
    ["test 8", "+7 (921) 593-03-53", true],
    ["test 9", "+7 (921) 593-03-53", true],
    ["test 10", "", false],
    ["test 11", "some text", false],
    ["test 12", "1234567890", false],
    ["test 13", "+7", false],
  ].forEach((test) => {
    // eslint-disable-next-line jest/valid-title
    it(test[0], () => {
      expect(isRusPhoneNumber(test[1])).toBe(test[2]);
    });
  });
});
