// Mempunyai 3 fungsi
// function 2 akan di eksekusi setelah aksi 1 selesai
// function 3 akan di eksekusi setelah aksi 2 selesai

/**
 * 1. function untuk membaca sebuah file
 * 2. function untuk megelola sebuah file
 * 3. function untuk memfilter file yang dibutuhkan
 */

function readFile(filePath, callback) {
  setTimeout(() => {
    callback ({
        "path": filePath,
        "header": "Ini adalah header",
        "content": "ini adalah content \n\n\n\tcontent ini adalah content\nini adalah paragraf terakhir dari content"
    }) 
  }, 1000);
}

function prosesFile(data, callback) {

    setTimeout(() => {

        callback( {
          header: data.header,
          content: data.content.split("\n"),
        });
    }, 500)

}

function filterContent(data, callback) {

    setTimeout(() => {
        callback({
            header: data.header,
            content: data.content.filter((item) => item.length > 10),
          });
    }, 200) 
}

// ? Cara 1
// const data = readFile("file.txt");
// const proses = prosesFile(data);
// const content = filterContent(proses);

// console.log(proses);

// ? cara 2
// readFile('file.txt', function(data) {
//     const proses = prosesFile(data)
//     const content = filterContent(proses)

//     console.log(content)

// })

// ? Cara 3
readFile('file.txt', function(data) {
    prosesFile(data, function(prosesData) {
        filterContent(prosesData, function(content){
            console.log(content)
        })
    })

})

/**
 * ketika sebuah function adalah asynchronous maka tidak boleh menggunakan return
 * Callback adalah sebuah function yang kita gunakan di parameter
 * callback digunakan ketika ada function async yang harus berjalan secara sync
 */
