let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

const age = 18;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}

if (registeredEarly && age > 18) {
  console.log(`Hello, ${raceNumber}! Race will start at 9:30am.`)
} else if (!registeredEarly && age > 18) {
  console.log(`Hello, ${raceNumber}! Race will start at 11:00am`)
} else if (age < 18) {
  console.log(`Hello, ${raceNumber}! Race will start at 12:30pm`)
} else {
  console.log(`Hello, ${raceNumber}. Please come see the registration desk.`)
} 


