// Contoh Implementasi Array

let myList = []; //Array Kosong
myList = ["ini", "Adalah", "Array"] //Mengisi Array
console.table(myList); //Menampilan array dengan index

// Cara Memanggil Array
let fruits = ["Apple", "Orange", "Manggo"];
console.table(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits.length) // Mencari Panjang Suatu array

// Menambahkan & Menghapus Array elemen/Item terakhir
let theDay = ["Senin", "Selasa", "Rabu"];
console.table(theDay)

theDay.push("Kamis") //menambahkan array elemen terakhir
console.table(theDay)

theDay.pop() // Menghapus Array elemen terakhir
console.table(theDay)

theDay.unshift("Minggu") // Menambahkan Array Elemen pertama
console.table(theDay)

theDay.shift() // Menghapus Array Elemen Pertama
console.table(theDay)

// Mengganti value Array
console.log(theDay)
theDay[0] = "Kamis"
theDay[1] = "Jumat"
theDay[2] = "Sabtu"
console.log(theDay)

// Copy by Reference
// Artinya : Array hanya mengubah nama buah menjadi arr2 tetapi tidak mengubah value nya
const buah = ["Mangga", "Pisang", "Jeruk"]
const arr2 = buah
arr2[0] = "Kedondong";

console.log(buah)
console.log(arr2)

// Copy by value
// Artinya : Sebuah Variabel hanya akan copy nilai/Value dari suatu Variabel
let angka = 1
let angka2 = angka
console.log(angka, angka2)
angka2 = 2;
console.log(angka, angka2)


// QUIZZ
const Q = [1,2,3,4,7,8]
const Q2 = [3,4,5,6]

