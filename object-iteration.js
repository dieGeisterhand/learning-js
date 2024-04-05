const cats = {
  home: {
    pako: {
      name: 'the boy',
      color: 'white',
      personality: 'quiet'
    },

    tani: {
      name: 'the princess',
      color: 'black',
      personality: 'outgoing'
    },

    lulo: {
      name: 'the baby',
      color: 'orange',
      personality: 'just a baby'
    }
  }
};

for (let i in cats.home) {
  if (i === 'pako') {
    console.log('the boy');
  };
  if (i === 'tani') {
    console.log('the princess');
  };
  if (i === 'lulo') {
    console.log('the baby');
  };
}


let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// log crew member role + name
for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
};

// log crew member name + degree
for (let crewMember in spaceship.crew) {
console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
};
