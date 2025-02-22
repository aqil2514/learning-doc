// *************************************
// ***************For Of****************
// *************************************

// For of adalah jenis looping untuk menelusuri object-object iterable, seperti String, Array, Arguments/Nodelist, TypedArray, Map, Set, User-defined iterable.

//Kasus I : Array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];

// mhs.forEach(m => console.log(m));// Menggunakan For Each

// mhs.forEach((m,i) => console.log(m,i)); // i menampilkan index mahasiswanya

// for(const m of mhs) { //For of
//     console.log(m);
// }

// for(const [i, m] of mhs.entries()){
//     console.log(m, i);
// }

//Kasus II : String

// const nama = 'sandhika';
// for (const n of nama){
//     console.log(n);
// }

//Kasus III : Nodelist
// const liNama = document.querySelectorAll('li');

// liNama.forEach(n => console.log(n.textContent));

// for(n of liNama){
//     console.log(n.innerHTML);
// }

//Kasus IV : Arguments
// function jumlahAngka(){
//     let jumlah= 0;
//     for(a of arguments){
//         jumlah += a;
//     }

//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5));

// *************************************
// ***************For In****************
// *************************************

// Hanya untuk enumerable, yaitu properti pada objek.

// const mhs = {
//     nama : 'Muhamad Aqil Maulana',
//     umur : 22,
//     email : 'muhamadaqil383@gmail.co'
// }

// for (m in mhs){
//     console.log(`${m} : ${mhs[m]}`);
// }