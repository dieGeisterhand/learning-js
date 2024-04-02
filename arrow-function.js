
// concise body arrow functions

// zero parameters

const functionName = () => {};

// one parameter

const functionName = (paramOne) => {};

// two or more parameters

const functionName = (paramOne, paramTwo) => {};




// this 

const squareNum = (num) => {
  return num * num;
};

// can be refactored to

const squareNum = num => num * num;


// as a result, this

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


// can turn into this


const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};


// that then can turn into this

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
                  // argument - implied return    if      output

// the previous declaration does not use brackets and has an implied return because
// the function consists of a single-line block.
