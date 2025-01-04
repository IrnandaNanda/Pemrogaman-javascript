//Array dengan string
let hari = ['Senin', 'Selasa', 'Rabu'];
console.log(hari);

//Array dengan String 
let mhs = ['Rizka', 'Roy', 'Alfiano'];
console.log(mhs);

//Array dengan angka
let angka = [123, 456, 789];
console.log(angka);

//Array campuran string + angka
let myArr = [123, 'teks', false];
console.log(myArr);

//Array dengan function
let myFunction = function () {
    return('Hello World')
}
let myArr2 = [123, 'Teks', true, myFunction()]
console.log(myArr2)

//Array dengan array
let myArr3 = [123, 'Teks', false, myFunction(), [4,2,3,1]]
console.log(myArr3);