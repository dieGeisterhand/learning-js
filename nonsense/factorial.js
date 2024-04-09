const factorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(6)); // returns 720. https://en.wikipedia.org/wiki/Factorial
