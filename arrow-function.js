const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};



// this 

const squareNum = (num) => {
  return num * num;
};

// can be refactored to

const squareNum = num => num * num;


// https://discuss.codecademy.com/t/what-is-the-syntax-for-arrow-functions/438372


function next(x) {
  return x + 1;
}

const arr = [1, 2, 3];

arr.map(next); // doonie's console shows [2, 3, 4]