// Function Biasa tidak modular
function printReceipt(cart) {
  // Mendapatkan Total harga dari barang
  let TotalHarga = 0;
  cart.forEach((item) => {
    TotalHarga += item[1];
  });

  // Mendapatkan PPN dari total harga barang
  let tax = TotalHarga * (10 / 100);

  return `
    TotalHarga ${TotalHarga} 
    PPN ${tax} 
    TotalHarga + PPN ${TotalHarga + tax}
    `;
}

const shopplist = [
  ["Soap", 5000],
  ["Shammpo", 15000],
];
console.log(printReceipt(shopplist));

console.log("===============👆👆👆==============");
console.log("Menggunakan Function Biasa")
console.log("Menggunakan Modular Function")
console.log("===============👇👇👇==============");


// Modular Function

// 1. Function yang digunakan untuk mendapatkan total harga
function getSubTotal(quantity) {
  let subTotal = 0;
  quantity.forEach((totalB) => {
    subTotal += totalB[1];
  });
  return subTotal;
}

// 2. Function Menentukan PPN
function getTax(subTotal) {
    return subTotal * (10/100)
}

// 3. Function utama yang memanggil function lainnya
function printReceipt2(cart2) {
  const subTotal = getSubTotal(cart2);
  const tax = getTax(subTotal);

  return `
    Subtotal ${subTotal} 
    PPN ${tax} 
    Subtotal + PPN ${subTotal + tax}
    `
}

const shopplist2 = [
    ["Sugar", 10000],
    ["Oil", 15000],
]
console.log(printReceipt2(shopplist2))
