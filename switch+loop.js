function getSleepHours (day) {
  switch (day.toLowerCase()) {
    case `monday`:
    return 7;
    break;
    case `tuesday`:
    return 6;
    break;
    case `wednesday`:
    return 5;
    break;
    case `thursday`:
    return 6;
    break;
    case `friday`:
    return 7;
    break;
    case `saturday`:
    return 12;
    break;
    case `sunday`:
    return 9;
    break;
  }
}

function getActualSleepHours() {
  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  let totalSleepHours = 0;

  for (let i = 0; i < daysOfWeek.length; i++) {
    totalSleepHours += getSleepHours(daysOfWeek[i]);
  }

  return totalSleepHours;
}

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    return `You got the perfect amount of sleep!`;
  } else if (actualSleepHours > idealSleepHours) {
    return `You need to go to sleep! You're missing ${actualSleepHours - idealSleepHours} hours of sleep!`;
  } else if (actualSleepHours < idealSleepHours) {
    return `You got more sleep than needed! You have an extra ${idealSleepHours - actualSleepHours} hours of sleep!`; 
  }
}

console.log(calculateSleepDebt());