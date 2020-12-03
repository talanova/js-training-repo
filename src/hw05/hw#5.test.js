import { f51, f52, f53 } from "./hw#5";

const firstArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

describe("f51", () => {
  it("test 1", () => {
    jest.spyOn(console, "log");
    f51(firstArr);
    expect(console.log).toHaveBeenCalledWith(55);
  });
});

describe("f52", () => {
  it("test 1", () => {
    const expectedSecondArr = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2];
    const secondArr = f52(firstArr);
    expect(secondArr).toStrictEqual(expectedSecondArr);
  });
});

describe("f53", () => {
  it("test 1", () => {
    jest.spyOn(console, "log");
    f52(firstArr);
    f53(firstArr);
    expect(console.log).toHaveBeenCalledWith(1, 10);
  });
});
