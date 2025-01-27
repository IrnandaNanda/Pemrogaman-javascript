function kelvinToCelsius(kelvin) {
    return kelvin - 273.15
  }
  
  function kelvinToFahrenheit(kelvin) {
    return ( kelvin - 273.15 ) * 9/5 +32
  }
  
  function celsiusToFahrenheit(celsius) {
    return ( celsius * 9/5 ) + 32
  }
  
  function celsiusToKelvin(celsius) {
    return celsius + 273.15
  }
  
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
  }
  
  function convertTemperature(temperature, initialUnit, finalUnit) {
    // your code here
    
  }
  
  console.log(convertTemperature(0, 'C', 'K')); // 273.15
  console.log(convertTemperature(0, 'C', 'F')); // 32
  
  console.log(convertTemperature(0, 'F', 'C')); // -17.78
  console.log(convertTemperature(0, 'F', 'K')); // 255.37
  
  console.log(convertTemperature(0, 'K', 'C')); // -273.15
  console.log(convertTemperature(0, 'K', 'F')); // -459.67