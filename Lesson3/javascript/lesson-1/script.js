/* Printing out stuff  */
console.log("I'm Alive!");


/* Generating Variables */
var number = 1;
var word = "language";
var languages = [
  "javascript",
  "c++",
  "python"
]

// console.log(number);
// console.log(message);
// console.log(languages[0]);
// Print out "My number _  favorite __ is __"
// console.log("My number " + number + "favorite" + word + "is " + languages[0]);

/* For Loops and Conditions
 * Part 1:
 * Errors and Debugging
 */
var statement = "";
try {
  for (var i = 0; i < 4; i++){
    statement = "Language #" + i + " is " + languages;
    console.log(statement);
  }
}
catch(err) {
  console.log(err);
}

/* For Loops and Conditions
 * Part 2:
 * Errors and Debugging
 */

 var boundary = languages.length;

 /* In general, a quick way */
 /* But if you want to customize know */
 for (;;i++){ // This will run infinitely and crash
   console.log("Infinitely runs");
 }

 for (; (i < languages.length);i++){ // This will run infinitely and crash
   console.log("Scales runs");
 }
 /* CHECKPOINT:
  * Change language amount, add more languages
  */

/* Above Throws an error */
