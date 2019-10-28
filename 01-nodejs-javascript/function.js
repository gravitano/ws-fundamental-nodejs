function showMessage() {
  console.log("Weather information");
}

const toCelsius = function(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
};

const showWeatherInfo = function(fahrenheit) {
  console.log("Info: ", toCelsius(fahrenheit));
};

// arrow function
const myFunction = () => 43;
const myFunction2 = text => {
  return text;
};
const myFunction3 = (param1, param2) => {
  return `${param1}, ${param2}`;
};

// calling function
showMessage();
console.log(toCelsius(42));
showWeatherInfo(70);
