const students = ["Andi", "Budi", "Citra"];

students.forEach(function(value, index, array) {
    console.log("Current Value Adalah : " + value);
    console.log("Current Index Adalah : " + index);
    console.log("Current Array Adalah : " + array);
    console.log("=================================");
})

// Method ForEach
let sum = 0;
const numbers = [65, 44, 12, 4]; 
numbers.forEach(function (item) { // Method forEach akan mengembalikan nilai apapun didalam array
    sum += item; // Variabel (Sum) yang awalnya bernilai 0 akan ditambahkan menggunakan forEach pada parameter (item)
})

console.log(sum)

// Method Map
let angka = [4,25,100];
let roots = angka.map(function (ang) { // Method yang hampir sama dengan metor forEach tapi mengembalikan array baru
    return Math.sqrt(ang)
})

console.log(roots)