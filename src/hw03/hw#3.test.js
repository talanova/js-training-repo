import { f31, f32, f33 } from "./hw#3";

describe("f31", () => {
  it("test 1", () => {
    jest.spyOn(console, "log");
    f31();
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});

describe("f32", () => {
  it("test 1", () => {
    jest.spyOn(console, "log");
    f32();
    expect(console.log).toHaveBeenCalledTimes(9);
    expect(console.log).toHaveBeenCalledWith("7 x 1 = 7");
    expect(console.log).toHaveBeenCalledWith("7 x 2 = 14");
    expect(console.log).toHaveBeenCalledWith("7 x 3 = 21");
    expect(console.log).toHaveBeenCalledWith("7 x 4 = 28");
    expect(console.log).toHaveBeenCalledWith("7 x 5 = 35");
    expect(console.log).toHaveBeenCalledWith("7 x 6 = 42");
    expect(console.log).toHaveBeenCalledWith("7 x 7 = 49");
    expect(console.log).toHaveBeenCalledWith("7 x 8 = 56");
    expect(console.log).toHaveBeenCalledWith("7 x 9 = 63");
  });
});

describe("f33", () => {
  [
    ["test 1", 5, 3],
    ["test 2", 15, 8],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(global.window, "prompt").mockImplementation(() => test[1]);
      jest.spyOn(console, "log");
      f33();
      expect(console.log).toHaveBeenCalledWith(test[2]);
    });
  });
  [
    ["test 4", ""],
    ["test 5", 0],
    ["test 6", "some text"],
  ].forEach((test) => {
    it(test[0], () => {
      jest.spyOn(global.window, "prompt").mockImplementation(() => test[1]);
      jest.spyOn(console, "log");
      f33();
      expect(console.log).toHaveBeenCalledTimes(0);
    });
  });
});
