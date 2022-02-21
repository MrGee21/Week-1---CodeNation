// Activity 1:
// Create a variable called age. Write an if statement
// JS
// that logs “Yes I can serve you” if the age is greater 
// than 17 and else logs “You aren’t old enough”
// Take your if statement and add a variable 
// called country in.
// Eg. if age > 17 and country == “UK”.

let age = 36;
let country = 'UK'

if (age <= 17 && country == UK){
    console.log('You are too young!')
} else {
    console.log('You are over 18!')
}

// Activity 2:
// Create a variable for any pizza topping. 
// Create a switch statement, if the topping is one of your 
// favourite ingredients, log to the console “These are 
// important ingredients for my pizza.” If you don’t mind 
// having Pepperoni for example log to the console “I don’t 
// mind having ${topping} on my pizza. 
// Finally, for any topping you don’t like log “${topping} 
// should not be on a pizza.”
switch (topping) {
    case 'Peperoni':
        console.log('I like Peperoni, too!');
        break;
    case 'Pineapple':
        console.log('Yuck! Pineapple!');
        break;
    case 'olives':
        console.log('I love Olives!');
        break;
    default:
        console.log('mmmm... Chicken!')
}

//  Activity 3
// Create a variable called password. 
// Check how many letters are in the password, if there are
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console. 
let password = 'ifelseswitch';
let passLength = password.length;

if (passLength <= 7) {
    console.log('Your password is too short')
} else {
    console.log(password)
}

// Activity 4
// Create a variable called num. 
// Check if the variable is divisible by 3 or 5. If it 
// is, log “This number is divisible by 3 or 5”. 
// Otherwise log something else.

const num = 27;

if (num % 3 == 0 || num % 5 == 0){
console.log('The number is divisable by 3 or 5.')
} else {
    console.log('The number is NOT divisable by 3 or 5.')
}

// Activity 5
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
// JS
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
// “fizz buzz” to the console. Otherwise log num to the console.

let num = 191;

if (num % 3 == 0) {
console.log('Fizz')
} else if (num % 5 == 0) { 
    console.log('Buzz')
} else if ('num % 3 == 0 || num % 5 == 0') {
    console.log('fizz buzz')
}

// Activity 6:
// Create a variable called num.
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202).

function isPalindrome (str) {
    return str == str.split("").reverse().join("");
}
console.log(isPalindrome("1001"))


// Activity 7
// Create a variable called time, a variable called placeOfWork 
// and a variable called townOfHome. Create an if statement that 
// logs to the console where someone is at times of the day. E.g. if 
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let time = 1700;
let placeOfWork = 'Code Nation';
let townOfHome = 'Bootle';

if (time <= 1700 && time >= 0900){
    console.log(`I am at ${placeOfWork}!`)
} else {
    console.log(`I'm in ${townOfHome}!`)
}

// Activity 8
// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string.

 function findLastVowel(string) {
    let pattern = /[jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi]/gim;    
    let result = [...string.match(pattern)]
    return result[result.length - 1]
   }
   
   console.log(findLastVowel("your string here"))

// Activity 9
// Create a variable called word that takes a string. Create 
// an if statement that checks if the last letter is the same as 
// the first. If it is return true, otherwise return false. 

function fastestIsPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
    }

// Activity 10
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the 
// sum is even. If it is return the number, otherwise return 
// the numbers multiplied together

let num1 = 108;
let num2 = 36;
let sum = num1 + num2;

if (sum % 2 == 0) {
    return console.log("even")}{
return console.log(num1 * num2);
}

