// Object declaration

const sam1 = {
    name: 'Sam',
    age: 4,
};

//  declaration on one line

const sam2 = {
    name: 'Sam',
    age: 4,
};

// In object declaration property values can be objects themselves

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

// The different ways we can access Sam the cat’s family
/*sam3.classification.family; // "Felidae"
sam3["classification"].family; // "Felidae"
sam3.classification["family"]; // "Felidae"
sam3["classification"]["family"]; // "Felidae"*/

// An object can contain functions, here's how we add a funtion to sam3
sam3.speak = function() {return "Meow!";};
// we can now call the function by adding parentheses to it:
sam3.speak();
console.log(sam3.speak());

// We can also delete a property from an object with the delete operator:
delete sam3.classification;         // the whole classification tree will be removed.
delete sam3.speak;                  // the speak function will be removed.

// DATA CONVERSION 
/*Data that comes from user input or other systems has to be converted.*/
// CONVERTING TO NUMBERS
/*It is very common to want to convert strings to numbers. when you collect input from
user it is usually as a string, ven if you're collecting a numeric value from them. */

// **1 using a number object constructor.
const numStr = "33.3";
const num = Number(numStr); //This creates a number value, *not* an instance of the number object

// If the string can't be converted to a number, NaN will be returned.

// **2 The second approach is to use the built-in parseInt or parseFloat functions.
// With parseInt, you can specify a radix, which is the base with which yu want to parse the number.
// For example this allows you to specify base 16 to parse hexadecimal. 
/*Its is always recomended you specify a radix, even if it is base 10 by default. Both
parseInt and parseFloat will discard everything they find past the number allowing you to
pass in messier input.*/

const a = parseInt("16 volts", 10); //the "volts" is ignored, 16 is parsed in base 10
const b = parseInt("3a", 16);       //parse hexadecimal 3a; result is 58
const c = parseFloat("15.5 kph");   //the "kph" is ignored; parseFloat always assumes base 10


// Date object can be converted to a number that represents the number of milliseconds since midnight.
// using its valueOf() method

const d = new Date();       // current date
const ts = d.valueOf();     // numeric value: millisec since midnight, january 1, 1970 UTC

// CONVERTING BOOLEAN
/*Sometimes, it is useful to convet boolean values to 1 (true) or 0 (false). The conversion
uses the conditional operator*/
const m = true;
const n = m ? 1 : 0;

// COVERTING TO STRING
/**All objects in JS have a method toString(), which returns a string representation.*/
const j = 33.5;
const s = j.toString();


// String template
let currentTemp = 19.5;
const message = 'The current temprature is ' + currentTemp + '\u00b0C';
console.log(message);

let currentTemp1 = 19.5;
const message1 = `The current temprature is ${currentTemp1}\u00b0C`;
console.log(message1);

// CONTROL FLOW

