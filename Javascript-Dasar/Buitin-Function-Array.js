const arr = ["Jeruk", 'Mangga', 'Pisang']

console.log(arr.join(" ")) // Memmbuat array menjadi String dan memisahkan array dengan something ( Di kasus ini saya pisahkan menggunakan spasi )

// Cara mengisi array menggunakan looping
const angka = new Array()
for (i=1; i<=10; i++) {
    angka.push(i)
}
console.log(angka)

// QUIZZ
const Q = [1,2,3,4,7,8]
const Q2 = [3,4,5,6]

// Munculkan angka yang tidak sama dari 2 array

const Q3 = Q.concat(Q2) // Untuk Menggabungkan 2 Array atau lebih
console.log(Q3)

// Untum Menambahkan value di dalam index yang kita inginkan
console.log(angka)
angka.splice(0,0,0) // Splice bisa digunakan untuk 3 hal 1. Menghapus 2.Menambah 3. Mengganti
// Cara Baca splice : Ganti array angka index ke 0, tanpa menghapus apapun, ganti dengan value 0 
console.log(angka)

// Untuk memisahkan Array 
const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers)
const baru = numbers.splice(1,5) // Cara Baca Splice : Ambill array angka dari range/index ke 1 sampai index ke 5
console.log(baru)

