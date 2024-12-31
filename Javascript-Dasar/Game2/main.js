//Menangkap Pilihan Player
let p = prompt('Tebak Angka 1 - 10 : ')

//Memanggil Fungsi random
let comp = Math.round(Math.random()*10);

console.log(comp)

//Menangkap pilihan komputer
let hasil = '';

if (p == comp) {
    hasil = "Selamat angka yang anda masukan BENAR"
} else {
    hasil = ("Yang anda masukan salah, Angka yang benar adalah " + comp)
}

alert(hasil)

//Menentukan Rules

//Menampilkan hasil