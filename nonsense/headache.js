// count how many times a character is repeated
const subLength = (string, character) => {

  let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++
      }
    }
    
    return count;
  }
  
  console.log(subLength('doggo', 'o'));


// display where
const subLength = (string, character) => {
  let count = 0;
  let index = -1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      console.log('\n> Match found\n');
      count++;

      if (count === 1) {
        index = i;
      } else {
        const hops = i - index - 1;
        console.log(`\n> Characters between matches: ${hops}`);
        index = i; 
      }

    } else {
      console.log('No matches');
    }
  }

  console.log(`\n> Total matches: ${count}`);
  return;
}


subLength('earthquake', 'e');
// two matches, eight character between matches