export default function isDate(value) {
  let pattern = /^\d{1,2}[\.\-\/\s]\d{1,2}[\.\-\/\s]\d{4}$/;
  return pattern.test(value);
}
