const nilai = 70;
let ucapan;

//Menggunakan If else statement
if (nilai <= 75) {
    ucapan = "Coba Lagi Tahun Depan";
} else {
    ucapan = "Selamat Anda Lulus";
}

console.log(ucapan);

//Menggunakan Ternary Operation
ucapan = nilai <= 75 ? "Coba Lagi Tahun Depan" : "Selamat Anda Lulus";

console.log(ucapan)