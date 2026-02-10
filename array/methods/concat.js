const names = ['Alice', 'Bob'];
const moreNames = ['Charlie', 'David'];
const allNames = names.concat(moreNames);

console.log(allNames); // Output: ['Alice', 'Bob', 'Charlie', 'David']  
// You can also concatenate multiple arrays at once
const evenMoreNames = ['Eve', 'Frank'];
const allNamesExtended = names.concat(moreNames, evenMoreNames);

console.log(allNamesExtended); // Output: ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank']  
// The original arrays remain unchanged
console.log(names); // Output: ['Alice', 'Bob']
console.log(moreNames); // Output: ['Charlie', 'David']
console.log(evenMoreNames); // Output: ['Eve', 'Frank'] 