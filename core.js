// fetch API is not supported in Nodejs,only supported through downloaded packages
// as alternative, I copied the response data of a Fake Json API through online endpoint.
// saved the response data to a separate js file and export it.
const { todos, persons } = require("./FakeAPI.js");

// map function walks through every  item in an array
// todos.map(todo => console.log(todo));

//get only the objects that has completed property that is === true
let completed = todos.filter((todo) => todo.completed === true);

//Compare the array length after filtering the the completed todos
// console.log(todos.length);
// console.log(completed.length);

// this reduce function returns an object that contains every user as property and it contains arrays of objects that belongs to it.
// group objects owned by user through a user's Id
result = completed.reduce(function (a, b) {
  a[b.userId] = a[b.userId] || [];
  a[b.userId].push(b);
  return a;
}, Object.create(null));

// console.log(result);

//////////////////////////////////////////////////////////////////////// Another Test ///////////////////////////////////////////////////////////////////

// an array with duplicate objects

const uniquePersons = new Map(); // deduplication using set()
persons.forEach((per) => {
  uniquePersons.set(per.id, per);
});

//Check how arrays differ in length as de-duplication has been made
console.log(persons.length);
console.log(uniquePersons.size);

let arrNames = ["Jun", "Robert", "Ben"];

//sort array of string alphabetically
console.log(arrNames.sort());

//shift() removes the first item of an array and returns it
arrNames.shift();

//adding items to the beginning of an array
arrNames.unshift("Balong");

//this function walks through every array of  strings and convert it to lowercase, making the sort function works as expected when text casing is not consistent.
let lowerCases = arrNames.map((name) => {
  return name.toLocaleLowerCase();
});
console.log(lowerCases.sort());

let arrNumbers = [44, 24, 65, 2, 43, 22, 876, 45, 21, 54, 6];

// sort numbers from highest to lowest
let arrNumbers2 = arrNumbers.sort((a, b) => b - a);

// return all numbers that is greater or equal to 43 and store it to a variable
let numGreater40 = arrNumbers.filter((num) => num >= 43);

console.log(numGreater40);
console.log(arrNumbers2);
console.log(arrNumbers.sort());

// reverse the iteration/sequence of an array according to values
console.log(numGreater40.reverse());

//Remarks
// Below are array manipulating functions that I read and tried to apply to simple instances.
// I understand of how each function works, I may need a documentation sometimes as my reference for usage

// toString() converts an array to a string separated by a comma.
// join() combines all array elements into a string.
// concat combines two arrays together or add more items to an array and then return a new array.
// push() adds item(s) to the end of an array and changes the original array.
// pop() removes the last item of an array and returns it
// shift() removes the first item of an array and returns it
// unshift() adds an item(s) to the beginning of an array and changes the original array.
// splice() changes an array, by adding, removing and inserting elements.
// slice() copies a given part of an array and returns that copied part as a new array. It does not change the original array.
// split() divides a string into substrings and returns them as an array.
// indexOf() looks for an item in an array and returns the index where it was found else it returns -1
// lastIndexOf() looks for an item from right to left and returns the last index where the item was found.
// filter() creates a new array if the items of an array pass a certain condition.
// map() creates a new array by manipulating the values in an array.
// reduce() calculates a single value based on an array.
// forEach() iterates through an array, it applies a function on all items in an array
// every() checks if all items in an array pass the specified condition and return true if passed, else false.
// some() checks if an item (one or more) in an array pass the specified condition and return true if passed, else false.
// includes() checks if an array contains a certain item.
