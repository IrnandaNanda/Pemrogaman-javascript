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
        return("Genap")
    } else {
        return("Ganjil")
    }
}

console.log(isEven(9));

//Latihan3
function calculateSquareArea(side) {
    let luas;

    luas = side * side ;

    return luas;
}

console.log(calculateSquareArea(5))

//Latihan4
function findMax(a,b,c) {

    if (a > b && a > c) {
        return a
      } if (b > a && b > c) {
        return b
      } else if (c > a && c > b){
        return c
      }

}
console.log(findMax(3,44,1))

//Latihan5 
function reverse(str) {

    //Pisahkan huruf menggunakan built function .split
     let splitString = str.split(""); 
 
     //Balik huruf yang sudah dipisah menggunakan built in function .reverse
     let reverseArray = splitString.reverse();
 
     //Gabungkan semua huruf yang di balik menggunakan built in function .join
     let joinArray = reverseArray.join(""); 
 
     return joinArray; // "olleh
}
console.log(reverse("Hello"))