// store key-value pairs
// any type
// Keeps insertion order

const map = new Map();


map.set('note', 1); // Map(1) { 'note' => 1 }
map.set('note', 2); // Map(1) { 'note' => 2 }
map.set('note', 3); // Map(1) { 'note' => 3}

// delete a key
map.delete("note") // true

// delete all
map.clear()

const arrayMap = new Map();
arrayMap.set([1, 2], 'array');

console.log(arrayMap) // Map(1) { [ 1, 2 ] => 'array' }

const users = new Map([
  ["name", "Luiz"],
  ["age", 25]
])
console.log(users) // Map(2) { 'name' => 'Luiz', 'age' => 25 }
console.log(users.size) // size: 2

console.log(users.get('name')) // Luiz
console.log(users.has('name')) // true
console.log(users.has('lastName')) // false