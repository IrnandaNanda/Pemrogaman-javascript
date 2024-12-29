
//Pengualangan dengan For
for (let nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
    console.log("Hello World " + nilaiAwal + "x");
}

console.log("========================");

//Latihan
let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik.");
    noAngkot++;
}

for (let noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
}