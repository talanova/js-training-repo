import { f21, f22, f23 } from "./hw#2";

describe("f21", () => {
  [
    ["test 1", [1, 2], 2],
    ["test 2", [2, 1], 2],
    ["test 3", [2, 2], 2],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(console, "log");
      const [a, b] = test[1];
      f21(a, b);
      expect(console.log).toHaveBeenCalledWith(test[2]);
    });
  });
});

describe("f22", () => {
  [
    ["test 1", 1, "January"],
    ["test 2", 6, "June"],
    ["test 3", 12, "December"],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(global.window, "prompt").mockImplementation(() => test[1]);
      jest.spyOn(console, "log");
      f22();
      expect(console.log).toHaveBeenCalledWith(test[2]);
    });
  });
  [
    ["test 4", ""],
    ["test 5", 13],
    ["test 6", "some text"],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(window, "prompt").mockImplementation(() => test[1]);
      jest.spyOn(console, "log");
      f22();
      expect(console.log).toHaveBeenCalledTimes(0);
    });
  });
});

describe("f23", () => {
  [
    ["test 1", [5, 9], true],
    ["test 2", [9, 5], false],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(console, "log");
      const [circle, square] = test[1];
      f23(circle, square);
      expect(console.log).toHaveBeenCalledWith(test[2]);
    });
  });
});
