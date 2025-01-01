function PenjumlahanVolume(a, b) {
    let c;

    c = a*a*a + b*b*b;

    return c
}
console.log(PenjumlahanVolume(8,3));

//Latihan 
function addNumbers(a, b) {

    let c;

    c = a + b;

    return c;
}

console.log(addNumbers(3,7))

//Latihan2
function isEven(num) {

    if (num % 2 == 0) {
        console.log ("Genap")
    } else {
        console.log("Ganjil")
    }

    return num;

}

console.log(isEven(9));

//Latihan3
function calculateSquareArea(side) {
    let luas;

    luas = side * side ;

    return luas;
}

console.log(calculateSquareArea(5))