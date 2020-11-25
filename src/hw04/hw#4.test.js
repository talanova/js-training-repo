import { f41, f42, f43 } from "./hw#4";

describe("f41", () => {
  it("test 1", () => {
    const age = "12";
    const expected = {
      name: "John",
      age: +age,
    };

    jest.spyOn(window, "prompt").mockImplementation(() => age);
    const user = f41();
    expect(user).toStrictEqual(expected);
  });
});

describe("f42", () => {
  it("test 1", () => {
    const age = "12";
    const expected = {
      name: "John",
      age: +age,
      role: "admin",
    };

    jest.spyOn(window, "prompt").mockImplementation(() => age);
    const user = f41();
    const admin = f42(user);
    expect(admin).toStrictEqual(expected);
  });
});

describe("f43", () => {
  it("test 1", () => {
    jest.spyOn(console, "log");
    const admin = {
      name: "John",
      age: 12,
      role: "admin",
    };
    f43(admin);
    expect(console.log).toHaveBeenCalledWith(admin.name, admin.age, admin.role);
  });
});
