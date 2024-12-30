
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

console.log("====================================");

//Latihan 2
for (i=1; i<=50; i++) {
    if (i % 2 == 1) {
        console.log(i + " adalah bilangan ganjil");
    }
}

console.log("====================================");

//Latihan 3
let total = 0;
for (i=1; i<=100; i++) {
    total += i; //total = total + i
}
console.log(" Total bilangan 1-100 adalah : " + total);

console.log("====================================");

//Latihan 4
let bintang = "*";
for (i=1; i<=5; i++) {
    bintang += "*"; //bintang = bintang + "*"
    console.log(bintang);
}