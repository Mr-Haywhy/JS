'use strict';
// es6 feature: block-scoped "let" declaration
const sentences = [
    {subject: 'JavaScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'},
];

// es6 feature: object destructuring
function say({ subject, verb, object }) {
    //  es6 feature: template strings
    // note that qoutes below are backticks (`), not single qoutes (')
    console.log(`${subject} ${verb} ${object}`);
}

const multiline ="line1\n" +
    "line2\n" +
"line3";
console.log(multiline);

// es6 feature: for..of
for(let s of sentences) {
    say(s);
}