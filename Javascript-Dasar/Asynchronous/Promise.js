// function readFile(filePath, callback) {
//     setTimeout(() => {
//       callback ({
//           "path": filePath,
//           "header": "Ini adalah header",
//           "content": "ini adalah content \n\n\n\tcontent ini adalah content\nini adalah paragraf terakhir dari content"
//       }) 
//     }, 1000);
//   }
  
//   function prosesFile(data, callback) {
  
//       setTimeout(() => {
  
//           callback( {
//             header: data.header,
//             content: data.content.split("\n"),
//           });
//       }, 500)
  
//   }
  
//   function filterContent(data, callback) {
  
//       setTimeout(() => {
//           callback({
//               header: data.header,
//               content: data.content.filter((item) => item.length > 10),
//             });
//       }, 200) 
//   }

//   readFile('file.txt', function(data) {
//     prosesFile(data, function(prosesData) {
//         filterContent(prosesData, function(content){
//             console.log(content)
//         })
//     })

// })

// ? function async

  function readFileWithPromise(filePath) {
    return new Promise (function (resolve, reject) {
        if (!filePath) {
            reject('File path cannot be empty')
        }   
              setTimeout(() => {
                  resolve( {
          "path": filePath,
          "header": "Ini adalah header",
          "content": "ini adalah content \n\n\n\tcontent ini adalah content\nini adalah paragraf terakhir dari content"
                  });
              }, 500)
    })
  }

//  ? Cara memanggil promise
readFileWithPromise().then(function(resolve){
    console.log(resolve) 
    // console.log('Jika resolve ini akan dijalankan')
}).catch(function(reject){
    console.log(reject)
    console.log('jika reject ini akan dijalankan')
}).finally(function(){
    console.log('Promise Selesai di eksekusi')
})