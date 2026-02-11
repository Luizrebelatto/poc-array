const user = {
  name: "Luiz",
  age: 25,
  greet() {
    return `Olá, ${this.name}`
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