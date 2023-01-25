function temperatureConverter(celsius) {
  var fahrenheit = Math.floor(celsius * (9 / 5) + 32);
  var kelvin = Math.floor(celsius + 273.15);
  return celsius + " °C is " + fahrenheit + " °F and " + kelvin + " K.";
}

var convertButton = document.getElementById("convert-button");
convertButton.addEventListener("click", function () {
  var temperatureInput = document.getElementById("temperature-input");
  var celsius = temperatureInput.value;
  var output = document.getElementById("output");
  output.innerHTML = temperatureConverter(celsius);
});

var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function () {
  var temperatureInput = document.getElementById("temperature-input");
  temperatureInput.value = "";
  var output = document.getElementById("output");
  output.innerHTML = "";
});
