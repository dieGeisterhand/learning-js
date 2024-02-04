function greet(name) {
  if (!name) { // falsy value (!). this is the same as if (name === undefined).
    console.log(`Hi there!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}