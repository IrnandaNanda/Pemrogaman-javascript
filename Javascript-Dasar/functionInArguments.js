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

function tambahBaru() {
    let hasil = 0;
    for (i=0; i<arguments.length; i++) {
        hasil += arguments[i]
    }
    return hasil;
}
let coba = tambahBaru(1,2,3);
console.log(coba)