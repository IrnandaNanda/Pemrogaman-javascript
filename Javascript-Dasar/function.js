function sayHello () {
    console.log("Ini adalah sebuah function");
}

sayHello()

// Function Dengan Parameter
function addTwoWords(first, second) {
    let result = first + second;
    console.log(result)
}

addTwoWords("Ini adalah JS", " Dengan parameter");

// Function dengan default parameter
function sayHello2(name = "Agung") {
    console.log("Hello " + name + ". Nice to meet you!");
}

sayHello2("Budi")
sayHello2()

// When Using Return in function
function square(x) {
    return x*x;
}

const demo = square(5)

console.log(demo)

// return digunakan untuk mengembalikan sebuah nilai di dalam function dan menentukan value apa yang akan dikembalikan oleh function tersebut
// return juga akan mengakhiri sebuah eksekusi dari sebuah function