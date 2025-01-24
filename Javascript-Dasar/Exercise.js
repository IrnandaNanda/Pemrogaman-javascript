// function checkDataType(string, number, boolean, array, object,) {
//     if (typeof checkDataType == " ") {
//         return string
//     }
// }

// console.log(checkDataType("123"));


function tipeData(input) {
    if (typeof input === "string") {
        return "String"; 
    } else if (typeof input === "number") {
        return "Number";
    } else if ( typeof input === "boolean" ) {
        return "Boolean";
    } else if ( typeof input === "object" ) {
        return "Object"
    } else {
        return "Tipe tidak dikenali"
    }
}

console.log(tipeData("Ruangguru")); // Output: "String"
console.log(tipeData(123));         // Output: "Number"
console.log(tipeData(true));         // Output: "Boolean"
console.log(tipeData());         // Output: "Object"