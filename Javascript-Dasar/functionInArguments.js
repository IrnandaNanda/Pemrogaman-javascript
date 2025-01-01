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