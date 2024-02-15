const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];


// forEach()
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});


const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// forEach()
fruits.forEach(fruits => {
  console.log(`I want to eat a ${fruits}`);
});






const numbers = [1, 2, 3, 4, 5];

// map()
const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

// filter()
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = [];

for (let i = 0; i < bigNumbers.length; i++) {
  smallNumbers.push(bigNumbers[i] / 100);
}

console.log(smallNumbers);




const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})



const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter(words => {
  return words.length > 7;
})