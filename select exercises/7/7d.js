function convertToFahrenheit(celsius) {
  let celsiusTemp = (celsius * (9/5)) + 32;
  console.log(celsiusTemp)
}

function convertToCelsius(fahrenheit) {
  let fahrenheitTemp = (fahrenheit - 32) * (5 / 9);
  console.log(fahrenheitTemp);
}

function convertTemperature(degrees, unit) {
  if (unit === `C`) {
    const result = convertToFahrenheit(degrees);
    return `${result}F`;
  } else if (unit === `F`) {
    const result = convertToCelsius(degrees);
    return `${result}C`
  }
}