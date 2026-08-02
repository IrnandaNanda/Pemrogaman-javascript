const convertCelciusToFahrenheit = (temperature) => {
    const result = 9 / 5 * temperature + 32;
    return result
}

const temperatureInFahrenheit = convertCelciusToFahrenheit(90);
console.log(`Hasil Konversi: `, temperatureInFahrenheit)