export default function isEmail(value) {
  let pattern = /^[a-z\._0-9]+@[a-z]+\.[a-z0-9]{2,5}$/i;
  return pattern.test(value);
}
