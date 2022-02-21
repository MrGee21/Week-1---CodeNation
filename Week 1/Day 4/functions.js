// ACTIVITY 1 //
// Take this code and turn it into arrow function 
// syntax:
// const factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// };
// console.log(factorial(33));


const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
};
console.log(factorial(33));

// ACTIVITY 2 //
// Edit the below snippet to include two parameters and a JS
// running order count updated when the function is called:

let orderCount = 0;
// const takeOrder = (topping1) => {
//     console.log(`Pizza with ${topping1});
//     orderCount++;
//     console.log (orderCount);
// }
// takeOrder("pineapple");

let orderCount = 0;
const takeOrder = (topping1,topping2,topping3) => {
    console.log(`Pizza with ${topping1}, ${topping2}, and ${topping3}.`);
    orderCount++;
    console.log (orderCount);
}
takeOrder("pineapple","ham","cheese");
takeOrder("pineapple","ham","cheese");

// Activity 3:
// Cash machine time! JS
// Let’s create one that:
// > Dispenses cash if your pin number is correct and your 
// balance is equal to, or more than, the amount you’re 
// trying to withdraw

cashMachine(1234, 30000)

const cashMachine = (pin, accBalance) => {
    let availableBal = 50000;
    let withdrawal = 25000;
    const myPin = 1234;
    while (pin == myPin){
        if(withdrawal <= availableBal){
            let remainder = availableBal - withdrawal;
            console.log(remainder);
        else if (withdrawal >= availableBal);
            console.log('You have insufficient funds in your account.')
    }
    

cashMachine(1234, 30000);

