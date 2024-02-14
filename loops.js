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