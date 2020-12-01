export function f41() {
  const user = {
    name: "John",
  };

  const age = Number(window.prompt("Enter user age:"));
  if (isNaN(age) || age < 0) {
    return null;
  }
  user.age = age;
  return user;
}

export function f42(user) {
  const admin = { ...user, role: "admin" };
  return admin;
}

export function f43(admin) {
  const { name, age, role } = admin;
  console.log(name, age, role);
}
