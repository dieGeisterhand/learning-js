function convertTemperature(degrees, unit) {
  if (unit === `c`) {
    function convertToFahrenheit(degrees) {
      let fahrenheitTemp = (degrees * (9/5)) + 32;
      console.log(fahrenheitTemp)
    }
  } else if (unit === `f`) {
    function convertToCelsius(degrees) {
      let celsiusTemp = (degrees - 32) * (5 / 9);
      console.log(celsiusTemp);
    }
  }
}