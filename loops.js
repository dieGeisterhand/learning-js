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

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}
