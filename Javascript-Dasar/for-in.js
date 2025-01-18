//Perulangan for yang digunakan untuk mengetahui property dalam sebuah object

const person = {
    firstName: "irnanda",
    secondName: "Nanda",
    status: "Student"
}

for (const property in person) {
    console.log(property, (person.property))
}