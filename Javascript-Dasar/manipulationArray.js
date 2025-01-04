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

