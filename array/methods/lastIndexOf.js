// returns the position of the last item that matches the condition

const numbers = [1, 2, 3, 4, 5, 3];

const lastIndex = numbers.lastIndexOf(3);

console.log(lastIndex);
// Output:
// 5

// If the element is not found, it returns -1
const fruits = ["maçã", "banana", "laranja", "banana", "uva"];

const lastPosition = fruits.lastIndexOf("banana");

console.log(lastPosition);
