// Menggunakan function expresion
const func1 = function (a,b) {
    return a + b;
}

// Menggunakan Arrow Function
const func2 = (a,b) => {return a + b};

const function1 = func1(20,5)
const function2 = func2(20,5)

console.log(function1)
console.log(function2)

// Explicit return Ketika sebuah arrow function akan menggunakan return di dalam block scope function-nya
const colorIsBlue = (color) => {
    if (color === "blue") {
        return "this color is blue";
    } else {
        return "Oh no, this color is not blue";
    }
}

console.log(colorIsBlue("red"))
console.log(colorIsBlue("blue"))

// Implicit return sebuah arrow function dalam menghandle return adalah tidak menggunakan keyword return,
const sayHi = (nama) => "Hai " + nama;

console.log(sayHi("Irnanda"));
// NOTE : Implicit return hanya bisa dilakukan jika terdapat hanya satu expression di dalam function tersebut

// Function return an Object
const getProfileObject = (firstName, secondName) => {
    return {
        fullname: firstName + " " + secondName
    }
}

console.log(getProfileObject("Irnanda", "Nanda"));