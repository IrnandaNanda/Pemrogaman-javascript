const readline = require('readline');

// Membuat interface readline
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// Prompt untuk meminta input
// Memanggil fungsi callback
// rl.question('Masukkan angka: ', (angka) => {

//     if (angka % 2 == 0) {
//         console.log(`Angka ${angka} adalah bilangan genap`);
//     } else if (angka % 2 == 1) {
//         console.log(`Angka ${angka} adalah bilangan ganjil`);
//     }
//   rl.close(); // Menutup interface setelah input selesai
// });


const menu = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

menu.question('Pilih Menu \n(cth: susu, jus, kopi): ', (input) => {
  switch (input) {
    case 'susu':
        console.log("Anda memilih susu");
        break;
    case 'jus':
        console.log("Anda memilih jus");
        break;
    case 'kopi':
        console.log("Anda memilih kopi");
        break;    
    default:
        console.log("Menu tidak tersedia");
        break;

}
  menu.close();
});
