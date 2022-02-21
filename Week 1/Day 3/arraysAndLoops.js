// Activity 1
// Create an array that lists your favourite films, up to
// 5 elements.
// Add 2 more using a method. 
// Use a loop to cycle through the array


let faveFilms = ['A', 'B', 'C', 'D', 'E'];
faveFilms[5] = 'F'
faveFilms[6] = 'G'
console.log(faveFilms)


// Activity 2:
// Generate 6 random numbers between JS
// 1-50 and log them to the console. 

for (let i=0; i<=5; i++){
    console.log(Math.floor(Math.random() * 51));
    }

// Activity 3
// If we can create a loop to put 0-9 on the screen, how 
// can we count from 9-0? Create a program that does 
// this.

// let count=[];
// for (let i=9; i>=0; i--){
//         count.push(i);
//     }
// console.log(`9-0 countdown is : ${count}.`)

// Activity 4:
// Displays 4 films stored in an array. JS
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is 
// Ghostbusters. 
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! 
// we want Ghostbusters!

let faveFilms = ['A', 'B', 'C', 'D'];
for(let i = 0; i < 1; i++){
if (faveFilms[3] == 'Ghostbusters'){
    console.log("Yay, It's Ghostbusters")
    } else {
    console.log('nah')
    }
}

// Activity 5
// Generate a random number between 1 and 30
// six times.
// For each random number generated, check if 
// this number of divisible by 7 or not.
// Log out a message to the console if it is divisible 
// by 7 or not.

for (let i = 0; i < 6; i++) {
set variable and to whole number and to pick at random, in range 0 and 30
    const number = Math.round(Math.random() * 30);
    if (number % 7 === 0) {
      console.log(`${number } is divisible by 7`);
    }
    else {
      console.log(`${number} its not divisible by 7`)
    }
  }

//   Imagine you’re a programmer for a social media platform! You have 
// been tasked with building a prototype for a mutual followers program. 
// JS
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
// In these arrays place 4 names as strings. Make sure there are 2 names 
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the 
// matching follower
let bobsFollowers = ['A', 'B', 'C', 'D', 'E5'];
let hannahsFollowers = ['1', '2', '3', '4', 'E5'];

Activity 6

let hannahsFollowers = [' Adam', ' Gary', ' Sam', 'Theo'];
let bobsFollowers = [' Adam', ' Sam', ' Gary', ' Peter'];
let mutualFollowers = [];

for (let i = 0; i < hannahsFollowers.length; i++) {
  for (let j = 0 ; j < bobsFollowers.length; j++) {
    if (hannahsFollowers[i] === bobsFollowers[j]){
      mutualFollowers.push(bobsFollowers[j]);
    }
  }
}
console.log('Your Mutual Followers are ' + mutualFollowers);


