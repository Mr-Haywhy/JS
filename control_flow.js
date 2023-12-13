// WHILE LOOP
// A While loop repeats the code as long as its condition is met.

let funds = 50;     // Starting condition

while(funds > 1 && funds < 100) {
    // Block statements
}

// BLOCK STATEMENT
/**A block statement is a series of statements enclosed in curly braces that is treated by
 * JS as a single unit. you can have a bloc statement by itself but it has little utility.
 * Where block statements become useful is with control flow statements. It is very common to 
 * use a block statement with control flow, it's not required. i.e if we wanted to simply
 * use a single line of code within a while loop to count up to 100 by twos, we don't need
 * a block statement.
 */
        let fundCount = 50;
        while(fundCount > 1 && fundCount < 100)
            fundCount = fundCount + 2;



//  HELPER FUNCTIONS FOR THE GAME WE ARE BUILDING
        // This returns a random integer in the range[m, n] (inclusive)
        function rand(m, n) {
            return m + Math.floor((n - m + 1)* Math.random());
        }

        //randomly returns a string representing one of the six Crown and Anchor faces
        function randFace() {
            return ["crown", "anchor", "heart", "spade", "club", "diamond"]
                [rand(0, 5)];
        }

//  IF...ELSE STATEMENT
/**Unlike the WHILE statement, it doesn't loop back on itself: the decision is made, and
 * then you move on.
 */

        const bets = {crown: 0, anchor: 0, heart: 0, spade: 0,
                club: 0, diamond: 0 };
            let totalBet = rand(1, funds);
            if (totalBet === 7) {
                totalBet = funds;
                bets.heart = totalBet;
            } else {
                // distribute total bet
            }
            funds = funds - totalBet;



/**While there is disagreement on the issue of using blocks for single-statement bodies,
 * one syntactically vaild choie is nearly universally reviled: mixing blocks and single
 * statements in the same if statement is not proper.
 */

        // don't do this
        if(funds > 1) {
            console.log("There's money left!");
            console.log("That means keep playing!");
        } else 
            console.log("You're broke! Time to quit");


        // Or this
        if (funds > 1) 
            console.log("There's money left! Keep playing!");
          else {
            console.log("You're broke");
            console.log("Time to quit.");
        }


// DO...WHILE LOOP

            /*  do {
                            
                } while (condition);*/

/**Note how this differs from the WHILE LOOP:  decision comes at the end, not the begining.
 * DO...WHILE LOOPS are for when you know you always want to execute the body of the loop at
 * least once (if the condition in a while loop start off as falsy, it won't even run once).
 */
       

            let remaining = totalBet;
            do {
                let bet = rand(1, remaining);
                let face = randFace();
                bets[face] = bets[face] + bet;
                remaining = remaining - bet;
            } while (remaining > 0);


// FOR LOOP
/**The FOR LOOP is extremely flexible (it can even replace a WHILE or DO WHILE LOOP), but
 * it's best suited for those time when you need to do things a fixed number of times 
 * (especially when you need to know which step you're on), which makes it ideal for rolling
 * a fixed number of dice.
 */

            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                
            }

/**A FOR LOOP consists of three parts: the INITIALIZER (roll = 0), the CONDITION (roll < 3),
 * and the FINAL EXPRESSION (roll++). It is nothing that can't be constructed with a WHILE
 * LOOP, but it conveniently puts all the loop information in one place.
 */

/**It has become a convention to use the variable i (shorthand for "index") in a for loop,
 * no matter what you're counting, though you can use whatever variable name you wish. 
 */

            const hand = [];
            for(let roll = 0; roll < 3; roll++){
                hand.push(randFace());
            }

           
/**Control flow in JS can be broken into two subcategories:
 * 1.   CONDITIONAL(BRANCHING) CONTROL FLOW: conditional control flow (if and if...else, and
 *      switch.) this is more or less like there are two or more paths to take, and we take 
 *      one, but we don't double back.
 * 2.   LOOP CONTROL FLOW: loop control flow (while, do...while and for loops) repeats their
 *      bodies until a condition is met.
 */

//  Control flow exceptions
/**There are four statements that can alter the normal processing of flow control:
 * 1.   break: Breaks out of loop early.
 * 2.   continue: Skip to the next step in the loop.
 * 3.   return: Exits the current function (regardsless of control flow).
 * 4.   throw: Indicates an exception that must be caught by an exception handler (even if
 *              it's outside of the current control flow statement).
*/

// CHAINING IF..ELSE STATEMENT
/**Chaining if..else statements is not actually a special syntax: it's simply a series of 
 * if...else statements where each else clause contains another if...else. it's a common enough 
 * pattern that it deserves mention.
*/

        if (new Date().getDay() === 3) {
            totalBet = 1;
        } else if (funds === 7) {
            totalBet = funds;
        } else {
            console.log("No superstition here!");
        }


