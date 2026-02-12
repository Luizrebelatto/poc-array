// Classes - syntactic sugar for constructor functions and prototypes

// Creating a class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const user1 = new User("Luiz", 25);
console.log(user1); // User { name: 'Luiz', age: 25 }
console.log(user1.greet()); // Hello, my name is Luiz
console.log(user1 instanceof User); // true

// Getters and Setters
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return `R$ ${this._price.toFixed(2)}`;
  }

  set price(value) {
    if (value < 0) throw new Error("Price cannot be negative");
    this._price = value;
  }
}

const product = new Product("Notebook", 2500);
console.log(product.price); // R$ 2500.00
product.price = 3000;
console.log(product.price); // R$ 3000.00

// Static methods - belong to the class, not the instance
class MathUtils {
  static sum(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.sum(2, 3)); // 5
console.log(MathUtils.multiply(4, 5)); // 20
// const m = new MathUtils(); m.sum(2,3) // TypeError - static methods can't be called on instances

// Inheritance with extends
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls the parent constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`;
  }
}

const dog = new Dog("Rex", "Labrador");
console.log(dog); // Dog { name: 'Rex', breed: 'Labrador' }
console.log(dog.speak()); // Rex barks
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

// Private fields (#)
class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Luiz", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
account.withdraw(200);
console.log(account.getBalance()); // 1300
// console.log(account.#balance); // SyntaxError - private field
