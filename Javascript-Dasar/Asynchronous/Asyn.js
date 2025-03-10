// ! Proses ini berjalan secara asynchronous
// ? yaitu dengan mendahulukan proses yang paling cepat terlebih dahulu
console.log('Mulai');
 setTimeout(() => {
    console.log('Hallo, Ini code dengan asynchronous')
 }, 2000)
console.log("Akhir")