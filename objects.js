// object syntax
      //pbkect
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
  //keys : value

// object 'keys' can be accessed using dot notation, such as

spaceship.color; // 'silver'

// if keys have spaces or special character, they must be accessed using bracket notation

spaceship['Fuel Type'];

// new properties can be added via dot notation

spaceship.speed = '50ms';

// they can also be deleted with the delete operator

delete spaceship.speed;




let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';
spaceship.numEngines = 4;
delete spaceship['Secret Mission'];


// functions can also be stored in objects.

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

// With the new method syntax introduced in ES6 we can omit the colon and the function keyword.

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat: function() {
    console.log(retreatMessage);
  },
  takeOff: function() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();