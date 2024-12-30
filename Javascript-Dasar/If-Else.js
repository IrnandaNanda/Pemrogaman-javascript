//If Else
let angka = 10;
if (angka % 2 == 0) {
    console.log("angka " + angka + " adalah bilangan genap");
} else {
    console.log("angka " + angka + " adalah bilangan ganjil");
}

//Latihan
console.log("====================================");

let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 6;
for (i=noAngkot; i<=jmlAngkot; i++) {
    if (i <= angkotBeroperasi) {
        console.log("Angkot No. " + i + " beroperasi dengan baik.");
    } else {
        console.log("Angkot No. " + i + " sedang tidak beroperasi.");
    }
}

console.log("====================================");

//Latihan 2
let angka1 = "1pp";
if (angka1 % 2 == 0) {
    console.log("angka " + angka + " adalah bilangan genap");
} else if (angka1 % 2 == 1) {
    console.log("angka " + angka + " adalah bilangan ganjil");
} else {
    console.log("Yang anda masukan bukan angka!!");
}

console.log("====================================");

//Latihan 3
let noAngkotB = 1;
let jmlAngkotB = 10;
let angkotBeroperasiB = 6;
for (i=noAngkotB; i<=jmlAngkotB; i++) {
    if (i <= angkotBeroperasiB && i != 5) {
        console.log("Angkot No. " + i + " beroperasi dengan baik.");
    } else if (i == 8 || i == 10 || i == 5) {
        console.log("Angkot No. " + i + " sedang lembur.");
    }
    else {
        console.log("Angkot No. " + i + " sedang tidak beroperasi.");
    }
}
