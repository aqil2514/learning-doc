//PROTOTYPE

//Object Literal, function Declaration, Constructor Function, object.create()

// //1. OBJECT LITERAL
// // Problem : Tidak efektif untuk objek yang banyak
// let mahasiswa1 = {
//     nama : 'Aqil',
//     energi : 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// //Kalau menggunakan object literal, harus menggunakan nama yang berbeda.

// let mahasiswa2 = {
//     nama : 'Dody',
//     energi : 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

//2. FUNCTION DECLARATION

// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`);
//     },

//     tidur: function(jam) {
//         this.energi += jam*2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa); //Untuk memberitahu mana Parent objectnya.
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Aqil = Mahasiswa('Aqil', 10);
// let Dody = Mahasiswa('Dody', 20);

// //3. CONSTRUCTOR FUNCTION KEYWORD NEW

// function Mahasiswa(nama, energi){
//     // let mahasiswa = Object.create(methodMahasiswa); //Untuk memberitahu mana Parent objectnya.
//     this.nama = nama;
//     this.energi = energi;
// }

// //Memanfaatkan prototype
// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam*2;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat makan!`;
// }


// let Aqil = new Mahasiswa('Aqil', 10);
// let Dody = new Mahasiswa('Dody', 20);

// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`)
//     }
// }

// let Aqil = new Mahasiswa('Aqil', 10);

//4. OBJECT.CREATE()

// VERSI KELAS

// class Mahasiswa{
//     constructor(nama,energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     main(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`)
//     }
//     tidur(jam) {
//         this.energi += jam*2;
//         console.log(`Halo ${this.nama}, Selamat bermain!`)
//     }
// }

// let aqil = new Mahasiswa('Aqil', 10);
// let dody = new Mahasiswa('Dody', 20);

// let angka = []; -> di belakang layar let angka = new Array();