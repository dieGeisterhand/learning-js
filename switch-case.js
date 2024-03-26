function lifePhase(age) {
  switch (true) {
    case (age < 0 || age > 140):
    return `This is not a valid age`
    
    case (age <= 3):
    return `baby`;
    case (age >= 4 && age <= 12):
    return `child`;
    case (age >= 13 && age <= 19):
    return `teen`;
    case (age >= 20 && age <= 64):
    return `adult`;
    case (age >= 65):
    return `senior citizen`;
  }
}


function finalGrade(homework, midterm, final) {
  
  if ((homework < 0 || homework > 100) || (midterm < 0 || midterm > 100) || (final < 0 || final > 100)) {
    return `You have entered an invalid grade.`;
  }
  
  const average = (homework + midterm + final) / 3;

  switch (true) {
    case (average <= 59):
      return `F`;
      break;
    case (average <= 69):
      return `D`;
      break;
    case (average <= 79):
      return `C`;
      break;
    case (average <= 89):
      return `B`;
      break;
    case (average <= 100):
      return `A`;
      break;
  }
}

console.log(finalGrade(99, 92, 95)) // Should print 'A'


function howOld(age, year) {
  const currentYear = new Date().getFullYear();
  const yearBorn = currentYear - age;

  switch (true) {
    case (year > currentYear):
    return `You will be ${(year - currentYear) + age} in the year ${year}`;
    break;

    case (year < yearBorn):
    return `The year ${year} was ${yearBorn - year} years before you were born`;
    break;

    case (year > yearBorn):
    return `You were ${year - yearBorn} in the year ${year}`;
    break;
  }

  return;

}


console.log(howOld(29, 1990));

function tipCalculator(quality, total) {
  switch (quality) {
    case 'bad':
    console.log('bad');
    return total * 0.05;
    break;

    case 'ok':
    console.log('ok');
    return total * 0.15;
    break;

    case 'good':
    console.log('good');
    return total * 0.20;
    break;

    case 'excellent':
    console.log('excellent');
    return total * 0.30;
    break;

    default:
    console.log('default');
    return total * 0.18;
  }
}


console.log(tipCalculator('good', 100)) //should return 20


function toEmoticon(emoji) {
  switch (emoji) {
    case 'shrug':
    return '|_{"}_|';
    break;

    case 'smiley face':
    return ':)';
    break;

    case 'frowny face':
    return ':(';
    break;

    case 'winky face':
    return ';)';
    break;

    case 'heart':
    return '<3';
    break;

    default:
    return '|_(* ~ *)_|';
    break;
  }
}

console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'


