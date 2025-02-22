//EXECUTION CONTEXT, HOISTINGC SCOPE

//CLOSURE
//Closure merupakan kombinasi antara function lingkungan leksikal dalam function tersebut
//Closure adalah sebuah function ketika memiliki akses ke parent scope, meskipun parent scopenya sudah selesai dieksekusi.
//Closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingukngan saat ia diciptakan.
//Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil, dan function yang lain.

//Lexical Scope / Lingkungan Leksikal

//KASUS I

// function init(){
//     let nama = 'Sandhika'; // Local Variable
//     function tampilNama(){//inner function (*closure)
//         console.log(nama);//Askes ke parent variable
//     }
//     tampilNama();
// }

// init();

//KASUS II
// function init(){
//     // let nama = 'Sandhika';
//     function tampilNama(nama){
//         console.log(nama);
//     }
//     return tampilNama; // Tidak akan bejalan karena tidak ada ()
// }
// let panggilNama = init();
// panggilNama('Sandhika'); //function tampilNama jadi berjalan

//KASUS II BENTUK RINGKAS
// function init(){
//     // let nama = 'Sandhika';
//     return function(nama){
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Sandhika'); //function tampilNama jadi berjalan
// panggilNama('Galih');

//Alasan menggunakan Closures
// - Untuk membuat function factories
// - Untuk membuat private method

// FUNCTION FACTORIES
// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}! Selamat ${waktu}. Semoga hari-harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Sandhika');
// selamatMalam('Malam');

// console.dir(selamatMalam);

// MEMILIKI PRIVATE VARIABLE ATAU METHOD
// let counter = 0;
// let add = function(){
//     return ++counter;
// }

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

//Menjadi
// let add = function(){
//     let counter = 0; //Menjadi Closure
//     return function(){
//         return ++counter; // Mengacu kepada closure
//     }
// }

// let a = add(); //untuk menjalankan function di dalam add

// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// CARA MENJALANKAN FUNCTION ANONYMOUS DALAM FUNCTION TANPA PERLU VARIABEL
let add = (function(){
    let counter = 0; //Menjadi Closure
    return function(){
        return ++counter; // Mengacu kepada closure
    }
})(); //IIFE (Imidiately Invoked Function Expressions)


console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());