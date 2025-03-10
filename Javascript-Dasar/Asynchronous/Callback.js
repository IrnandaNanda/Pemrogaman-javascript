// Mempunyai 3 fungsi
// function 2 akan di eksekusi setelah aksi 1 selesai
// function 3 akan di eksekusi setelah aksi 2 selesai

/**
 * 1. function untuk membaca sebuah file
 * 2. function untuk megelola sebuah file
 * 3. function untuk memfilter file yang dibutuhkan
 */

    function readFile(filePath) {

        setTimeout(() => {
            return {
                "path": filePath,
                "header": "Ini adalah header",
                "content": "ini adalah content \n\n\n\tcontent ini adalah content\nini adalah paragraf terakhir dari content"
            }
        }, 1000);
    }

    function prosesFile(data) {
        return {
            "header": data.header,
            "content": data.content.split("\n")
        }
    }

    function filterContent(data) {
        return {
            "header": data.header,
            "content": data.content.filter((item) => item.length > 10)
        }
    }

    const data = readFile('file.txt')
    const proses = prosesFile(data)
    const content = filterContent(proses)

    console.log(proses)