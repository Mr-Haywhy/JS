/**By using the comma operator, we can combine multiple assignments and final expressions. i.e
 * here's a for loop to print the first eight Fibonacci numbers:
 */
//          for([initialization]; [condition]; [final-expression]) {
//                   statement
//          }      



for (let temp, i = 0, j=1; j<30; temp = i, i = j, j = i + temp) {
    console.log(j); 
}

// for (;;) {
//     console.log("this will repeat forever");
// }

for(let x=0.2; x<3.0; x += 0.2)
    console.log(x);

/**Note that a for loop can always be written as a while loop. in other words:
 *      for([initialization]; [condition]; [final-expression])
 *          statement
 * 
 * is equivalent to:
 * 
 *      [initialization]
 *      while([condition]) {
 *            statement
 *            [final-expression]
 *      }
 * However, the fact that you can write a for loop as a while loop doesn't mean you should.
 * Because all the loop control information is right there on the first line, making it very
 * clear what's happening. Also, initializing variables with let confines them to the body
 * of the for loop.
 */

//      SWITCH STATEMENTS
/**Where if..else statements allow you to take one of two paths, switch statements allow you
 * to take multiple paths based on a single condition. It follows, then, that the condition
 * must be something more varied than a truthy/falsy value: for a switch statement, the 
 * condition is an expression the evaluates to a value.
 */

        switch (expression) {
            case value1:
                // executed when the result of expression matches value1
                break;
            case value2:
                // executed when the result of expression matches value2
                break;
                ...
            case valueN:
                // executed when the result of expression matches valueN
                break;
            default:
                // executed when none of the values match the value of expression
                break;
        }

