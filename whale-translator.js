const input = `turpentine and turtles`;
// if loops work, log should be UUEEIEEAUUEE

const vowels = [`a`, `e`, `i`, `o`, `u`];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === vowels[1]) {
    resultArray.push(vowels[1]);
  }

  if (input[i] === vowels[4]) {
    resultArray.push(vowels[4]);
  }

  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

const resultString = resultArray.join(``);

console.log(resultString.toUpperCase());


