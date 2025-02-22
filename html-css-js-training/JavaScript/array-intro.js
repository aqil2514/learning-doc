//array adalah susunan sistematis dari objek-objek serupa (secara Umum.)
//array adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel) yang tiap-tiap elemennya memiliki index. (Programming).
//Array adalah variabel yang lebih sakti, karena bisa menampung lebih dari satu nilai. (Sandhika Galih).
//contoh
var hari = 'Senin';
var hari = 'Selasa'; //Nilai senin akan hilang, kecuali jika nama variabelnya berbeda

//Contoh Array
var hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum`at', 'Sabtu', 'Minggu'];//Gunakan tanda [] dan koma sebagai pemisah data satu & yang lain.

//MANFAAT ARRAY
// - Mempermudah pengelolaan nilai/value/data
// - Manajemen Memori

// Kumpulan pasangan key dan nilai
// Key adalah index pada array dengan tipe integer yang dimulai dari 0
// Array pada javascript tipenya object
// Memiliki fungsi/method length untuk menghitung jumlah elem di dalamnya
// Elemen boleh memiliki tipe data yang berbeda

//KEY AND VALUE PAIR
var binatang= [];
binatang = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];
//Maksudnya, 0 = Kucing; 1 = Kelinci; 2 = Monyet; dst.
//Index mulai dari 0

console.log(binatang[2]); //Yang keluar adalah Monyet

//Elemen array boleh beda tipe, contoh
var myArr = ['teks', 2, false];
//Array bisa disimpan dalam array, contoh
var myFunc = function(){
    alert('Hello World!');
}
var myArr2 = ['texks', 2, false, myFunc, [4,5,6]];//Array di dalam array (Array multidimensi)

//Untuk memanggil 5 dalam index 4 adalah
console.log(myArr2[4][1]);