// store unique values
// all types

const set = new Set();

// to add values
set.add(1);
set.add(2);
set.add(2); // duplicate, will not be added

console.log(set); // Set { 1, 2 }

// check if value exist
console.log(set.has(1)); // true
console.log(set.has(3)); // false

set.delete(1);
console.log(set); // Set { 2 }

const size = set.size;
console.log(size); // 1

set.clear();
console.log(set); // Set {}