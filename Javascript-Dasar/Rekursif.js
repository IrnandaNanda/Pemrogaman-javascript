//Menggunakan Rekursif
function faktorial(n) {
    if ( n === 0 ) return 1;
    return n * faktorial(n - 1);
}


//Menggunakan Looping
function faktorialLooping(n) {
    let hasil = 1;
for (i=n; i > 0; i--) {
        hasil *= i;
    } return hasil;
}

console.log(faktorial(5))
console.log(faktorialLooping(5))