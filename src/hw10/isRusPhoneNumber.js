export default function isRusPhoneNumber(value) {
  let pattern = /^((8|\+7)[\s\-]?)(\(?\d{3}\)?[\s\-]?)?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
  return pattern.test(value);
}
