//Menangkap pilihan player
let tanya = true;

while (tanya) {
  let p = prompt("pilih : gajah, semut, orang");

  //Menangkap pilihan computer
  //Memanggil fungsi random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  console.log(comp);

  //Menentukan Rules
  let hasil = "";
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    // if ( comp = orang ) {
    //     hasil = "KALAH!";
    // } else {
    //     hasil = "MENANG";
    // }
    hasil = comp == "semut" ? "MENANG" : "KALAH";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "MENANG" : "KALAH";
  } else {
    hasil = "Yang anda masukan salah"
  }

  alert(
    "Anda Memilih : " +
      p +
      "\nDan komputer memilih : " +
      comp +
      "\nMaka anda " +
      hasil
  );

  tanya = confirm("lagi?");
}

alert("Terimakasih Sudah Bermain");
