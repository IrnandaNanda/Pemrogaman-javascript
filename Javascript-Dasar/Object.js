const data = {
    nama: "Irnanda",
    umur: 22,
    status: "Pelajar"
}

// Cara Memanggil Object

// 1. Dot Nation : Cara Umum memanggil object menggunakan sintaks Dot
console.log(data)
console.log(data.nama)
console.log(data.umur)
console.log(data.status)

// 2. Object Destructuring 
const { nama, umur, status } = data
console.log(nama)
console.log(umur)
console.log(status)