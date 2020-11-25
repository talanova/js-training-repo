export function f41() {
  const user = {
    name: "John",
  };

  const age = +prompt("Enter user age:");
  if (isNaN(age) || age < 0) {
    return null;
  }
  user.age = age;
  return user;
}

const currentUser = f41();
console.log(currentUser);

export function f42(user) {
  const admin = { ...user, role: "admin" };
  return admin;
}

const currentAdmin = f42(currentUser);
console.log(currentAdmin);

export function f43(admin) {
  const { name, age, role } = admin;
  console.log(name, age, role);
}

f43(currentAdmin);
