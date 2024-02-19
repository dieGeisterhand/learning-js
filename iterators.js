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



let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach((word) => {
  count++;
})
console.log(count);

storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

storyWords = storyWords.map((word) => {
  return word === misspelledWord ? 'beautiful' : word;
});

let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
console.log(badWordIndex);

storyWords[78] = 'really';

let lengthCheck = storyWords.every((word) => {
  return word.length < 10;
});
console.log(lengthCheck);

storyWords.forEach((word) => {
  word.length > 10 && console.log(word);
});







console.log(storyWords.join(' '));

