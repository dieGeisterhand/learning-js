    // initialize loop // stoping condition // iteration statement
    for (let counter = 0; counter < 4; counter++) {
      console.log(counter);
    }

    
// nested loops.

// on example below, for each follower bob has, we iterate through every single one tina happens to have.
    
const bobsFollowers = [`carlos`, `andres`, `pedro`, `miguel`];

const tinasFollowers = [`miguel`, `pedro`, `roberto`];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
      console.log(mutualFollowers);
    }
  }
}







for (let i = 1; i < 4; i++) {
  console.log(i);
}



// while loop. for loop that achieves the same result above for reference. notice the global variable established before.

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
