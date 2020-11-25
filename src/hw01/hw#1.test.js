import { f11, f12, f13 } from "./hw#1";

describe("f11", () => {
  it("test 1", () => {
    jest.spyOn(console, "log");
    f11(1, 2);
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith(3);
    expect(console.log).toHaveBeenCalledWith(2);
  });
});

describe("f12", () => {
  it("test 1", () => {
    jest.spyOn(console, "log");
    f12("some string", "some another string");
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(30);
  });

  it("test 2", () => {
    jest.spyOn(console, "log");
    f12("", "");
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(0);
  });
});

describe("f13", () => {
  [
    ["test 1", "100", 1],
    ["test 2", "400", 4],
    ["test 3", "999", 27],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(window, "prompt").mockImplementation(() => test[1]);
      f13();
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(test[2]);
    });
  });

  [
    ["test 4", "99"],
    ["test 5", "1000"],
    ["test 6", ""],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(window, "prompt").mockImplementation(() => test[1]);
      f13();
      expect(console.log).toHaveBeenCalledTimes(0);
    });
  });
});
