const items = ['item1', 'item2', 'item3'];

// execute a provided function once for each array element
items.forEach(item => console.log(item));
// Output:
// item1
// item2
// item3

// You can also access the index of each element
items.forEach((item, index) => console.log(`${index}: ${item}`));
// Output:
// 0: item1
// 1: item2
// 2: item3