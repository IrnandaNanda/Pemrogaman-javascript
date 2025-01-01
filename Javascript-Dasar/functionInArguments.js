function tambah(a,b) {
    return a + b;
}

console.log(tambah(2,3))

function kali(a,b) {
    return a*b;
}

console.log(kali(2,3));

//Function In Argument
console.log(kali(tambah(2,3), tambah(2,3)))

//Function with args (Tidak usah menambah parameter ketika menggunakan args)
function tambahBaru() {
    let hasil = 0; //variabel hasil awalnya 0
    for (i=0; i<arguments.length; i++) {
        hasil += arguments[i] //Penjumlahan dilakukan disini
    }
    return hasil;
}
let coba = tambahBaru(1,2,3);
let coba2 = tambahBaru(1,2,3,4);
console.log(coba)
console.log(coba2)

//Contoh penggunaan args/Arguments
function args() {
   return arguments
}
console.log(args("Mencoba", 1, true));
console.log(args("Ini function tanpa parameter"));
console.log(args("Dan hanya menggunakan args/Arguments"));