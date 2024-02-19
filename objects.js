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