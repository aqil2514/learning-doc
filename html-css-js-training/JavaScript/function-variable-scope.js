//Scope bagaimana sebuah variable dapat diakses dalam program
//scope ada dua, block scope dan function scope

//global scope/window scope = function global yang dapat digunakan.
//Jika variabel ada di dalam function, maka variabel tidak dapat langsung dipanggil.
//Jika variabel ada di luar function, variabel tersebut dapat dipanggil walau ada di dalam function.
//Analogi: Orang dalam mobil bisa liat ke luar, orang luar tidak bisa liat ke dalam mobil.
//Untuk memanggil variabel global, gunakan kode window. Contoh, window.a
//Jika di dalam function tidak ada deklarasi var, maka var tersebut akan menimpa global scope variabel.
//Jika ingin buat variabel lokal, maka deklarasikan var di dalam sebuah function
//"use strict" berfungsi untuk menggunakan mode strict. Akan dijelaskan nanti.
//Parameter dalam function itu akan selalu menjadi lokal variabel.