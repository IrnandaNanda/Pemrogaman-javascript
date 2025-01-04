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