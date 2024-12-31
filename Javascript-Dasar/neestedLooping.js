let s = "";
for (i = 0; i < 15; i++) {
    for (j = i; j < 15; j++) {
        s += "*";
    }
    s = s + "\n";
}
console.log(s);
console.log("====================================");

let string="";
for (i=0; i<5; i++) {
    for (j=0; j<=i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);


// i sama dengan 5; jika i kurang dari 0; maka kurang i 1
// j sama dengan 0; jika j kurang dari i(5); maka tambah 1

console.log("===============================================")

let string3 = "";

// Pola pertama (naik)
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        string3 += "*";
    }
    string3 += "\n";
}

// Pola kedua (turun)
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        string3 += "*";
    }
    string3 += "\n";
}

console.log(string3);