//Menambah elemen pada Array
let arr = []
arr[0] = 'Irnanda' 
arr[1] = 'Tri' 
arr[2] = 'Santosa' 
console.log(arr);

//Menghapus Elemen pada Array
let arr2 = ['Irnanda', 'nanda', 'IrnandaNanda']
arr[1] = undefined
console.log(arr2);


//Menampilkan Seluruh Array
let arr3 = ['Irnanda', 'Rexi', "Agung", 'Bowo']
for (i=0; i < arr3.length; i++) {
    console.log('Mahasiswa ke ' + (i+1) + ': '+ arr3[i]);
}

let arrMethod = ['Irnanda', 'Putri', 'Haji']

//1. Join
console.log(arrMethod.join (' - ')) // Untung menggabungkan isi array

//2. Push & Pop
arrMethod.push('Agus', 'Sedih'); // Untuk Menambahkan array di index yang paling terakhir
console.log(arrMethod.join (' - '));

arrMethod.pop() // Untuk menghapus Array index paling terakhir
console.log(arrMethod.join (' - '));

//3. Unshift & Shift
arrMethod.unshift('S.kom') // Untuk menambahkan Array pada index pertama
console.log(arrMethod.join (' - '));

arrMethod.shift() // Untuk menghapus Array index pertama
console.log(arrMethod.join (' - '));

console.log('========================================')

//4. Splice & Slice
let arrMethod2 = ['Anggur', 'Apel', 'Pisang']

arrMethod2.splice(1,0,'Semangka') //Untuk menambahkan elemen di tengah, tidak dari awal ataupun akhir
console.log(arrMethod2.join (' - '));

let arrSlice = arrMethod2.slice(1,3) //Mengambil Array dari index ke 1 sampai index ke 2
console.log(arrSlice.join (' - '));

console.log('=================================================')

let arrAngka = [1,2,3,4,5,6,7]
// for (i = 0; i < arrAngka.length; i++) {
//     // console.log(arrAngka.join (' - '));
//     console.log(arrAngka[i])   
// }


//For Each tidak mengembalikan array melainkan mengembalikan String/Number
arrAngka.forEach(function(e) {
    console.log(e)
})



