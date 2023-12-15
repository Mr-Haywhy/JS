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

/**JavaScript will evaluate expression, pick the first case that matches, and then execute
 * statements until it sees a break, return, continue, throw or the end of the switch
 * statement */

            switch (totalBet) {
                case 7:
                    totalBet = funds;
                    break;
                case 11:
                    totalBet = 0;
                    break;
                case 13:
                    totalBet = 0;
                    break;
                case 21:
                    totalBet = 21;
                    break;
            }


/**Note: There is something called "fall-through execution" In the switch statement above,
 * thesame action is being taken when the bet is 11 or 13. A switch statement will keep 
 * executing statements until it sees a break statement. This is were we might want to 
 * take the advantage of fall-through execution
 */

// So the statement becomes 

            switch (totalBet) {
                case 7:
                    totalBet = funds;
                    break;
                case 11:
                case 13:
                    totalBet = 0;
                    break;
                case 21:
                    totalBet = 21;
                    break;
            }



/* The break statement can be replaced with return statement if we are using the switch 
 * statement inside a function
 */


            function adjustBet(totalBet, funds) {
                switch (totalBet) {
                    case 7:
                        return funds;
                    case 13:
                        return 0;                
                    default:
                        return totalBet;
                }
            }



// FOR...IN LOOP

/**The for...in loop is designed to loop over the property keys of an object.
 *          for(variable in object)
 *              statement
 * 
 *          (const, let, var) 'OBJ-identifier' = {Object}
 *           for(let 'property' in 'identifier'){
 *              if(!'OBJ-identifier'.hasOwnProperty(var 'property')) 'built in function'continue;
 *              console.log(property + string + OBJ-identifier[property]);
 *          }
 */

            const player = {name: 'Thomas', rank: 'Midshipman', age: 25 };
            for(let property in player) {
                if(!player.hasOwnProperty(property)) continue;
                console.log(property + ': ' + player[property]);
            }


// FOR...OF LOOP

/**The for..of loop operator is another way to loop over the elements in a collection.
 *          for(variable of object)
 *              statement
 * 
 * The for...of loop can be used on arrays, but more generically, on any object that is
 * iteratable. 
 * 
 *          (const, let, var) name = [array];
 *          for(let (variable) of name)
 *              console.log(`string template`);
 */

            const hand = [randFace(), randFace(), randFace()];
            for(let face of hand)
                console.log(`You rolled.....${face}!`);


/**It is a great choice when you need to loop over an array, but don't need to
 * know the index number of each element. If you need to know the indexes, use a regular
 * for loop. 
 */


            const hand1 = [randFace(), randFace(), randFace()];
            for(let i=0; i<hand1.length; i++)
                console.log(`Roll ${i+1}: ${hand1[i]}`);




// USEFUL CONTROL FLOW PATTERNS
// Using continue to reduce conditional nesting
/**Very often, in the body of a loop, you'll only want to continue to execute the body under
 * certain circumstances (essentially combining a loop control flow with a conditional control
 * flow).
 */

            while(funds > 1 && funds < 100) {
                let totalBet = rand(1, funds);
                if(totalBet === 13) {
                    console.log("Unlucky! Skip this round.....");
                } else {
                    // play.....
                }
            }

/**This is an example of 'nested control flow' inside the body of the while loop, the bulk
 * of the action is inside the else clause; all we do inside the if clause is to call 
 * console.log. We can use continue statements to flatten this structure.
*/

            while(funds > 1 && funds < 100) {
                let totalBet = rand(1, funds);
                if(totalBet === 13) {
                    console.log("Unlucky! Skip this round.....");
                    continue;
                }
                // play....
            }