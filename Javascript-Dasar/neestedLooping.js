let s = "";
for (i = 0; i < 15; i++) {
    for (j = 0; j <= i; j++) {
        s += "*";
    }
    s = s + "\n";
}
console.log(s);