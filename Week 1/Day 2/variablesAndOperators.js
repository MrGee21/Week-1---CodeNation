// Activity 1
// Create a program that stores someone’s name, 
// age and favourite colour and log it to the console 
// in a complete sentence using Template Literals.
// Update all of your variables and write out a 
// new sentence underneath your original

// let username = 'Gary';
// let age = 36;
// let favouriteColour = 'Coffee';
// console.log('Hello, my name is ${name}. I am ${age} years of age and my favourite drink is ${favouriteDrink}');

// Activity 2
// Create a program that stores what you eat today 
// for breakfast, lunch and dinner. Log these to the 
// console. 
// Update each of these variables to what you 
// will eat tomorrow. Log these to the console.
// let breakfast = 'coffee';
// let lunch = 'egg on toast';
// let dinner = 'maccies';
// console.log('Today, i had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.')
// breakfast = 'tea';
// lunch = 'bacon on toast';
// dinner = 'KFC';
// console.log('Tomorrow, i will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.')

// Activity 3
// Create a program that calculates the number 
// of days from today to your birth date
  
const todaysDate = new Date("02/15/2022");
const birthDay = new Date("03/16/2022");
let differenceInTime = birthDay.getTime() - todaysDate.getTime();
differenceInTime = differenceInTime / (1000 * 3600 * 24);
  

console.log(`There are ${differenceInTime} days until my birthday!`)

// Activity 4
// Create 9 variables: space1, space2… space9. 
// Assign either the value ‘x’,’o’,’ ‘, to each of 
// these variables.
// Insert the variables into your board using the 
// ${varName} syntax and make it look like the 
// displayed board.

space1 = ('X');
space2 = ('O');
space3 = ('');

console.log ("     |     |    ");
console.log (`  ${space1}  |  ${space2}  |  ${space3}  `);
console.log ("     |     |    ");
console.log (" - - - - - - - - ");
console.log ("     |     |    ");
console.log (`  ${space1}  |  ${space1}  |  ${space3}  `);
console.log ("     |     |    ");
console.log (" - - - - - - - - ");
console.log ("     |     |    ");
console.log (`  ${space2}  |  ${space3}   |  ${space3}  `);
console.log ("     |     |    ");


