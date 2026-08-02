// Function Expression (Digunakan agar karena tidak memiliki hoisting)

const convertCelciusToFahrenheit = function (temperature) {
    const result = 9 /5 * temperature + 32;
    return result
}

const temperatureInFahrenheit = convertCelciusToFahrenheit(90);
console.log(`Hasil Konversi: `, temperatureInFahrenheit)


// First-Class-Citizen : function dapat diperlakukan layaknya variabel
function multiply(a,b) {
    return a * b;
}

function sum(c, d) {
    return c + d;
}

function calculate(operation, numA, numB) {
    return operation(numA, numB)
}

const result = calculate(multiply, 2, 4)
const result2 = calculate(sum, 2, 3)
console.log(`Hasil Multiply: `, result)
console.log(`Hasil Sum: `, result2)