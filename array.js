const s = "hello";
s.toUpperCase();           // "HELLO"

// ARRAYS
/*In javaScript, arrays are a special type of object. Unlike regular objects, array contents 
have a numeric and sequential. Arrays support a number of useful methods that make this data 
type an extremely powerful way to express information.*/

// Array size is not fixed; you can add or remove elements at any time
// Arrays are not homogeneous; each individual element can be of any type.
// Arrays are zero-based. Meaning, the first element in the array is element [0].

/* Arrays are special types of objects with some extra functionality, you can assign 
non-numeric keys to an array. But this can lead to confusing behavior and difficul to 
diagnose bugs, and is best avoided.*/

// To create an array, use a square brackets with the elements of the array seperated by commas.

// Array of numbers
const a1 = [1, 2, 3, 4];

// Mixed types array
const a2 = [1, 'two', 3, null];

// Multiple lines array
const a3 = [
    "What the hammer? what the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its dealy terrors clasp?",
];

// Nested array
const a4 = [
    [1, 3, 5],
    [2, 4, 6],
];

// Array containing objects
const a5 = [
    {name: "Ruby", hardness: 9},
    {name: "Diamond", hardness: 10},
    {name: "Topaz", hardness: 8},
];

// Array property,
const arr = ['a', 'b', 'c'];
arr.length;

// To access individual elements of an array
const arr1 = ['a', 'b', 'c'];
arr1[0];                     // get the first element
arr1[arr1.length - 1];        // get the last element in the array

// To overwrite the value at a specific array index
const arr2 = [1, 2, 'c', 4, 5];
arr2[2] = 3;


// DATE & TIMES
/**Dates and times in JS are represented by the built-in Date object. Date object can be 
 * dificult to work with, especially if you are dealing with dates in different time zones.*/


// To create a date that's initialized to the current date and time, use new Date():
const now = new Date();
now;

// To create a date that's initialized to a specific date (at 12:00 am)
const holiday = new Date(2016, 9, 31);      // Note that months are zero-based: 9=Oct.
holiday;

// To create a date that's initialized to a specific date and time:
const holidayParty = new Date(2016, 9, 31, 19, 0);

