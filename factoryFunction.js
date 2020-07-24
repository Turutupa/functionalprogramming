const User = function (name) {
  let username = name;

  return {
    upperCase() {
      return username.toUpperCase();
    },
    lowerCase() {
      return username.toLowerCase();
    },
    greeting() {
      return `Welcome back ${username}`;
    },
    update(newName) {
      username = newName;
      return username;
    },
  };
};

const newUser = User('Ramon');
console.log(newUser.greeting());
newUser.update('Berto');
console.log(newUser.greeting());
