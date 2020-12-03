import {
  isDate,
  isEmail,
  isRusPhoneNumber,
  isDateEmailOrPhoneNumber,
} from "./hw#10";

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
    it(test[0], () => {
      expect(isEmail(test[1])).toBe(test[2]);
    });
  });
});

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
    it(test[0], () => {
      expect(isRusPhoneNumber(test[1])).toBe(test[2]);
    });
  });
});

describe("isDateEmailOrPhoneNumber", () => {
  [
    ["test 1", "22 11 2020", "is date"],
    ["test 2", "aaaaaaaaaa@aaa.ru", "is email"],
    ["test 3", "89215930353", "is phone number"],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(global.window, "prompt").mockImplementation(() => test[1]);
      jest.spyOn(console, "log");
      isDateEmailOrPhoneNumber();
      expect(console.log).toHaveBeenCalledWith(`"${test[1]}" ${test[2]}`);
    });
  });

  [
    ["test 4", ""],
    ["test 11", "some text"],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(global.window, "prompt").mockImplementation(() => test[1]);
      jest.spyOn(console, "log");
      isDateEmailOrPhoneNumber();
      expect(console.log).toHaveBeenCalledTimes(0);
    });
  });
});
