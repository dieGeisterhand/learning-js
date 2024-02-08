//send out global message with

alert(`example`);

//calculate percentages with (using 10% as example)

(10/100);

//use `` for string interpolation. better than concatenation with '' or ""
//example:

`Estimated tax (${10}%): $${Math.round((799 * 2 + 2095 * 2 + 499 + 499) * (10/100))}`;

//as done above, when dealing with money, use cents and convert to full
//value by dividing by 100.
// $5.99 would be:

599 / 100;

//Math.round() is used to round numbers to the nearest value. 

Math.round();

//Math.floor() nears to the lowest value and Math.ceil() to the highest.

Math.floor();

Math.ceil();



//you're building this, eventually. don't lose it. it calculates celsius and fahrenheit

//need two values entered for either or.

//fahrenheit
(celsius * (9/5)) + 32

//celsius
(fahrenheit - 32) * (5/9)


let animals = [`cow`, `dog`, `cat`];
let s = ``;

for (let i = 0; i < animals.length; i++) {
  s += animals[i] + `, `;
}



let inventory = [
  {
    'name': `Cotton Shirt`,
    'weight': 5
  },
  {
    'name': `Knife`,
    'weight': 2
  },
  {
    'name': `Gorro barato`,
    'weight': 3
  }
]

let s = 0;

for(let i = 0; i < inventory.length; i++) {
  s += inventory[i].weight;
}