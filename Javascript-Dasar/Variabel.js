// Variabel (Const : Variabel yang isinya tidak bisa dirubah, let : Variabel yang isinya bisa dirubah)
const id = 123; 
let username = 'Dicoding' 

// ATURAN VARIABEL

// 1. Tidak boleh menggunakan nama varibel yang sama, Kecuali Cakupannya berbeda
// CONTOH :
function printCompanyInfo() {
  const name = 'Dicoding'; // <- nama variabel sama
  const legal = 'LLC';
  
  console.log('Company name:', name);
  console.log('Legal type:', legal);
}
 
function printEmployeeInfo() {
  const name = 'John'; // <- nama variabel sama
  const division = 'IT';
  
  console.log('Employee name:', name);
  console.log('Division:', division);
}
 
printCompanyInfo();
printEmployeeInfo();

// 2. Nama Variabel tidak boleh mengandung karakter selain huruf, angka, garis, dan dollar
// CONTOH :
// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;

// 3. Nama Variabel tidak boleh diawali dengan angka
// CONTOH :
// nama variabel yang benar
const firstName = 'Fulan';
const _secondName = 'Fulana';