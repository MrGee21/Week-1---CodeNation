// // Activity
// // … let’s create an object called person with a key 
// // called name and set the value to your name.
// // Add another key called age...
// // Activity 1:

// // Let’s edit our person object to include…
// // A function called sayHi and when it’s called, it 
// // should return “Hello my name is ${this.name}”

// const person = {
//     name: 'Gary',
//     age: 36,
//     faveSongs: 
//         ['A', 'B', 'C', 'D'],
//     sayHi: true,
//     helloThere(){
//     if(this.sayHi){
//         return `Hello, my name is ${person.name}`}
//     }
// };
// console.log(person.helloThere());
// console.log(person.faveSongs)

// // Activity 2:
// // Create an object called pet with the key values of:
// // name, typeOfPet, age, colour
// // And methods called eat and drink. They should return a 
// // string saying [Your Pet Name] is eating/drinking.
// / const pet = {
//         name: 'petA',
//         typeOfPet: 'Lion',
//         age: 10,
//         colour: 'rust',
//     eating(){
//         return `${pet.name} is eating`
//     },
//     drinking(){
//         return `${pet.name} is drinking`
//     },
//     };
//     console.log(pet.eating);
//     console.log(pet.drinking);



// let alarm = '';
// let day = 'Saturday';
// const alarmClock = {
//     weekendAlarm: 'no alarm needed',
//     weekdayAlarm: 'get up at 7am'
    
// };
// if (day == 'Saturday'){
//     alarm = alarmClock.weekendAlarm;
//     console.log(alarm)
// } else if (day != 'Saturday'){
//     alarm = alarmClock.weekdayAlarm;
//     console.log(alarm.weekdayAlarm)

// Activity 3:
// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all 
// items chosen with costs and total costs.


let foodAmount = 0;
let drinkAmount = 0;
let total = 0;

const coffeeShop = {
    branch:"Liverpool",
    menu:[
        "cappuccino",
        "Latte",
        "Hot chocolate",
        "Tea",
        "sandwich",
        "Wrap"],
    fooodPrice:3.50,
    drinkPrice:1.00
}
let priceofDrink = coffeeShop.drinkPrice
let priceOfFood = coffeeShop.fooodPrice
let item = coffeeShop.menu

const orderfood = (food)=>{
    for(let i = 0 ;i < item.length ;i++){
        if(item[i] == food ){
             console.log(`Your order is: ${food}`)
             foodAmount += priceOfFood;

             console.log(priceOfFood);
        }
        }
    }


orderfood("sandwich");
orderfood("Wrap");
const orderdrink = (drink)=>{
    for(let j = 0 ;j < item.length;j++){
        if( item[j] == drink){
             console.log(`Your order is: ${drink}`);
             drinkAmount += priceofDrink;

             console.log(priceofDrink);
        }
        }
    }


orderdrink("Hot chocolate");
orderdrink("Tea");
orderdrink("Latte");

total += (foodAmount + drinkAmount); 
console.log(`Total cost:${total}`);