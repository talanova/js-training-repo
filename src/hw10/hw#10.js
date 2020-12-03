export function isDate(value) {
  if (typeof value !== "string") return false;
  const pattern = /^\d{1,2}[\\.\-\\/\s]\d{1,2}[\\.\-\\/\s]\d{4}$/;
  return pattern.test(value);
}

export function isEmail(value) {
  if (typeof value !== "string") return false;
  const pattern = /^[a-z\\._0-9]+@[a-z]+\.[a-z0-9]{2,5}$/i;
  return pattern.test(value);
}

export function isRusPhoneNumber(value) {
  if (typeof value !== "string") return false;
  const pattern = /^((8|\+7)[\s\\-]?)(\(?\d{3}\)?[\s\\-]?)?\d{3}[\s\\-]?\d{2}[\s\\-]?\d{2}$/;
  return pattern.test(value);
}

export function isDateEmailOrPhoneNumber() {
  const input = window.prompt("Enter some text:");
  if (isDate(input)) {
    console.log(`"${input}" is date`);
  } else if (isEmail(input)) {
    console.log(`"${input}" is email`);
  } else if (isRusPhoneNumber(input)) {
    console.log(`"${input}" is phone number`);
  }
}
