'use strict';

//   Setting up prettier and VS code
const x = 23;
const t = "Yo, he's ";
const jh = "He's Ok.";

if (x === 23) console.log('He');

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1992));

//BUG

//Installing Node.js and Setting Up a Dev Environment
console.log(t + calcAge(1992) + ', ' + jh);

//Meet John, he's failing learning how to code.
//No clear goal, looked at courses, copied code.
//Didn't practice outside the class.
//Only learning in isolation.
//Couldn't build his own app.
//Lost motivation.

//products
const pizzaXL = {
  name: 'Extra Large Pizza',
  shortName: 'XL',
  size: '16"',
  sauce: 'Marinara',
  cheese: 'Mozarella',
};

const pizzaLg = {
  name: 'Large Pizza',
  shortName: 'Lg',
  size: '14"',
  sauce: 'Marinara',
  cheese: 'Mozarella',
};

const pizzaMed = {
  name: 'Medium Pizza',
  shortName: 'Med',
  size: '12"',
  sauce: 'Marinara',
  cheese: 'Mozarella',
};
const pizzaSmall = {
  name: 'Small Pizza',
  shortName: 'Sm',
  size: '8"',
  sauce: 'Marinara',
  cheese: 'Mozarella',
};

//inventory

let inventoryInfo = {
  xlDough: 50,
};

console.log(pizzaLg, pizzaMed, pizzaSmall, pizzaXL);

//buttons set up
function orderPizzaXL() {
  console.log(`You chose a ${pizzaXL.name} 😃`);
  inventoryInfo.xlDough = inventoryInfo.xlDough - 1;
  if (inventoryInfo.xlDough === 0) {
    alert(`You're out of ${pizzaXL.shortName} dough!`);
  }
  return console.log(`You have ${inventoryInfo.xlDough} XL dough balls left.`);
}

function truckInPizzaXL() {
  console.log(`You received ${pizzaXL.name} dough ball 😃`);
  inventoryInfo.xlDough = inventoryInfo.xlDough + 1;
  return console.log(
    `You now have ${inventoryInfo.xlDough} XL dough balls. 🚚`
  );
}
