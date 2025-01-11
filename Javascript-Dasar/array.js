let arrayKosong = []

let arrayNama = ["irnanda", "nanda", 15]

console.table(arrayNama)

//Untuk menambahkan data kedalam array (dimulai dari index pertama)
const nama = [];
nama.push("Irnanda");
nama.push("nanda", "santosa");
nama.push("budi", "eko", "rudi");
console.table(nama);

//Untuk menampilkan array berdasarkan index nya
console.info(nama[1]);
console.info(nama[2]);
console.info(nama[3]);

//Untuk melihat panjang array
console.log(nama.length);

//untuk mengubah isi array
nama[1] = "tri";
console.table(nama)

//Menghapus isi array (Tetapi panjang array tetap)
delete nama[3];
console.table(nama);
console.log("Panjang array nama sekarang adalah = " + nama.length);

//Array 2 dimensi
nama.push(["programmer", "zaman", "now"])
console.table(nama)