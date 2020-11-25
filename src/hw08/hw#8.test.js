import { getDayOfWeek, getMinutesPassedInCurrentDay, getYounger } from "./hw#8";

describe("getDayOfWeek", () => {
  [
    ["test 1", "22.11.2020", "Воскресенье"],
    ["test 2", "23.11.2020", "Понедельник"],
    ["test 3", "24.11.2020", "Вторник"],
    ["test 4", "25.11.2020", "Среда"],
    ["test 5", "26.11.2020", "Четверг"],
    ["test 6", "27.11.2020", "Пятница"],
    ["test 7", "28.11.2020", "Суббота"],
  ].forEach((test) => {
    it(test[0], () => {
      expect(getDayOfWeek(test[1])).toBe(test[2]);
    });
  });
});

describe("getMinutesPassedInCurrentDay", () => {
  let RealDate;

  beforeEach(() => {
    RealDate = window.Date;
    window.Date = () => {
      const date = new RealDate();
      date.setFullYear(2020, 10, 22);
      date.setHours(0, 10, 0, 0);
      console.log(date);
      return date;
    };
  });

  afterEach(() => {
    window.Date = RealDate;
  });

  it("test 1", () => {
    jest.spyOn(console, "log");
    getMinutesPassedInCurrentDay();
    expect(console.log).toHaveBeenCalledWith(10);
  });
});

describe("getYounger", () => {
  [
    ["test 1", ["01.01.2000", "02.01.2000"], "01.01.2000"],
    ["test 2", ["01.01.2000", "01.01.2000"], "01.01.2000"],
    ["test 3", ["02.01.2000", "01.01.2000"], "01.01.2000"],
  ].forEach((test) => {
    it(test[0], () => {
      const [first, second] = test[1];
      expect(getYounger(first, second)).toBe(test[2]);
    });
  });
});
