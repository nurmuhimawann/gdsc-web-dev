// console.log("Hello world dari eksternal js")

// console.log(angka);
// // console.log(nama);

// // Keyword var
// var angka = 1;
// angka = 2;

// console.log(angka);


// // Keyword let
// let nama = "john";
// nama = "Brendan";
// nama = 0; // hal kaya gini menyebabkan sifat gajelas sebaiknya dihindari

// console.log(nama);


// // Keyword const
// const is_cool = true; // boolean
// console.log(is_cool);


// String
// const singleQuote = '"Wow"';
// const doubleQuote = "it's over";

// const backtick = `He said ${singleQuote}, ${doubleQuote}.`;
// const tanpaBacktick = "He said " + singleQuote + ", " + doubleQuote + ".";

// console.log(backtick, tanpaBacktick);


// Numbers
// const integer = 1;
// const desimal = .2;
// const eksponen = 2e10;
// const numericSeparator = 1_000_000;

// console.log(integer, desimal, eksponen, numericSeparator);


// Boolean
// let is_cool = true;
// is_cool = false;

// console.log(is_cool);


// Array
// const mobilDiShowroom = ['BMW', "Honda", "Toyota"];

// console.log(mobilDiShowroom);


// Object
// const programmer = {
//   nama: "John",
//   umur: 24,
//   favoriteLanguages: ['JS', "Kotlin", "TS"]
// }

// console.log(programmer);


// value vs reference
// const orang1 = "john";
// const orang2 = "john";

// console.log(orang1 === orang2);


// const objek1 = { nama: "john" };
// const objek2 = objek1;

// console.log(objek1 === objek2);



// Arithmetic operator
// let x = 10;
// let y = 9;

// x++; // x = x + 1;
// y--;

// Shorthand
// x *= y; // x = x * y;

// console.log(x);

// Comparison operator
// const variable1 = 2;
// const variable2 = "2";

// console.log(variable1 === variable2);

// const nilaiA = 3;
// const nilaiB = 3;

// console.log(nilaiA >= nilaiB);

// const nama1 = 2;
// const nama2 = "2";

// console.log(nama1 !== nama2);


// Pengkondisian
// const umur = 300;

// if (umur === 19) {
//   console.log("Muda");
// }

// if (umur < 19) {
//   console.log("Muda");
// } else {
//   console.log("Tua");
// }

// if (umur < 19) {
//   console.log("Muda");
// } else if (umur < 60) {
//   console.log("Tua");
// } else {
//   console.log("sudah sangat-sangat tua")
// }


// Switch statement
// const nilai = 3;

// switch (nilai) {
//   case 1:
//     console.log('sangat buruk');
//     break;

//   case 2:
//     console.log('oke');
//     break;

//   case 3:
//     console.log('sangat bagus');
//     break;

//   default:
//     console.log('Tidak valid');
//     break;
// }


// Ternary operator
// const nilai = 80;

// const lulus = nilai >= 80 ? true : false;
// const nilaiHuruf = nilai >= 90 ? "A" : "B";

// console.log(lulus, nilaiHuruf);


// Perulangan
// let target = 0;

// while (target !== 2) {
//   target = Math.round(Math.random() * 10) + 1;

//   console.log(target);
// }

// const nilai = ["jon", 'vallen', "mark"];
// for (let i = 0; i < nilai.length; i++) {
//   console.log(nilai[i]);
// }

// for (const nama of nilai) {
//   console.log(nama);
// }


// Function
// function cetakHelloWorld() {
//   console.log("Hello World");
// }

// const cetakPesan = function (pesan) {
//   console.log(pesan);
// }

// cetakHelloWorld();
// cetakPesan("Hallooooo");
// cetakPesan("Namaku");
// cetakPesan("Vallen");


// function tambahDuaAngka(angkaPertama, angkaKedua) {
//   return angkaPertama + angkaKedua;
// }

// const hasil1 = tambahDuaAngka(2, 3);
// const hasil2 = tambahDuaAngka(10, 10);

// console.log(hasil1, hasil2);