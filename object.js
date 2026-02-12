const user = {
  name: "Luiz",
  age: 25,
  greet() {
    return `Hello, ${this.name}`
  }
}
console.log(user) // { name: 'Luiz', age: 25, greet: [Function: greet] }
console.log(user.name) // Luiz
console.log(user.age) // 25
console.log(user.greet()) // Olá, Luiz

// add new property
user.lastName = "Miranda";
console.log(user) // { name: 'Luiz', age: 25, greet: [Function: greet], lastName: 'Miranda' }

// delete a property
delete user.age;
console.log(user) // { name: 'Luiz', greet: [Function: greet], lastName: 'Miranda' }

// check if property exist
console.log('name' in user) // true
console.log('age' in user) // false

obj.hasOwnProperty("name") // true

const key = "name";
console.log(user[key]); // Luiz

console.log(Object.keys(user));
// ['name', 'greet', 'lastName']

console.log(Object.values(user)); 
// [ 'Luiz', 25, [Function: greet] ]

console.log(Object.entries(user));
// [ [ 'name', 'Luiz' ], [ 'age', 25 ], [ 'greet', [Function: greet] ] ]

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}
// name Luiz
// age 25
// greet [Function: greet]

const { name, lastName } = user;

console.log(name);
console.log(lastName);