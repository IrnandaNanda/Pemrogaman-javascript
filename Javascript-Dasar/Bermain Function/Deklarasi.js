function convertCelciusToFahrenheit (temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
    console.log('Hasil Konversi: ', temperatureInFahrenheit);
}

const temperatureInCelcius = 90;
convertCelciusToFahrenheit(temperatureInCelcius)



// Fitur Hoisting

getWorld()
function getWorld() {
    console.log('Hello World!')
}