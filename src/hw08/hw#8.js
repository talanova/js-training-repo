export function getDayOfWeek(input) {
  const [day, month, year] = input.split(".");
  const date = new Date(`${year}-${month}-${day}`);

  const dayOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return dayOfWeek[date.getDay()];
}

export function getMinutesPassedInCurrentDay() {
  const date = new Date();

  const midnight = new Date(date);
  midnight.setHours(0, 0, 0, 0);

  console.log(Math.floor((date - midnight) / 1000 / 60));
}

function getDateFromFormattedString(input) {
  const [day, month, year] = input.split(".");
  return new Date(`${year}-${month}-${day}`);
}

function isFirstYounger(first, second) {
  const firstDate = getDateFromFormattedString(first).getTime();
  const secondDate = getDateFromFormattedString(second).getTime();
  return firstDate - secondDate < 0;
}

export function getYounger(first, second) {
  return isFirstYounger(first, second) ? first : second;
}
