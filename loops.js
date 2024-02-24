// initialize loop // stoping condition // iteration statement

// print 0 through 3
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}


// print 5 through 10
for (let i = 5; i < 11; i++) {
  console.log(i);
}

// same thing but from 5 to 0
for (let counter = 5; counter >= 0; counter--){
  console.log(counter);
}

// iterating through an array using a loop. output would be grizzly bear, sloth, sea lion
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

// same thing but with a string
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

let i = 1;
while (i < 4) {
  console.log(i);
  i++;
}



// do...while loop example below.


let cupsOfSugarNeeded = 5;

let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);


// breaking a for loop 

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);


  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}

console.log(`And if you don't know, now you know.`);
