/**By using the comma operator, we can combine multiple assignments and final expressions. i.e
 * here's a for loop to print the first eight Fibonacci numbers:
 */
//          for([initialization]; [condition]; [final-expression]) {
//                   statement
//          }      

for (let temp, i = 0, j=1; j<30; temp = i, i = j, j = i + temp) {
    console.log(j); 
}

for (;;) {
    console.log("this will repeat forever");
}