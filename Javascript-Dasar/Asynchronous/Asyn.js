// ! Proses ini berjalan secara asynchronous
// ? yaitu dengan mendahulukan proses yang paling cepat terlebih dahulu
console.log('Mulai');
 setTimeout(() => {
    console.log('Hallo')
 }, 2000)
console.log("Akhir")