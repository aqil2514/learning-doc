// DOM Events

// Even != Events
// Events mempresentasikan sebuah kejadian yang terjadi dalam DOM. Kejadian tersebut bisa dilakukan oleh user atau otomatis (API).

// Cara mendengarkan Event
// 1. Event Handler
// - Inline HTML Atribute (Tidak disarankan)
// - Element method
// 2. addEventListener()

// Event Handler
// Gunakan keyword on<event>;
// UNCOMENT DARI SINI

// // STUDI KASUS I (KETIKA CLICK PARAGRAF 3, WARNA BACKGROUND AKAN BERUBAH)

// // 1. Tangkap elementnya

// const p3 = document.querySelector('.p3');

// // 2. Bikin function

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// // 3. Jika menggunakan Inline HTML Atribute, tambahkan atribut onclick="ubahWarna()"

// // 4. Jika menggunakan element method. Gunakan kode bawah
// const p2 = document.getElementsByClassName('p2')[0];
// p2.onclick = ubahWarnaP2; //tanpa tanda kurung "()";

// // STUDI KASUS ii (JIKA DIKLIK PARAGRAF 4, AKAN MUNCUL ITEM BARU)
// // 1. Tangkap dulu p4-nya
// const p4 = document.querySelector('section#b p');
// p4.style.cursor= 'pointer';

// // 2. Jalankan kodenya
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

// const p3 = document.querySelector('.p3');
// p3.onclick = function (){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function (){
//     p3.style.color = 'red';
// }
// // Event "onclick" itu menimpa

// const p3 = document.querySelector('.p3');
// p3.addEventListener('click', function(){
//     p3.style.backgroundColor= 'lightblue';
// });
// p3.addEventListener('click', function(){
//     p3.style.color= 'red';
// });

// // Event listener itu menambah

// Daftar Event
// - Mouse Event
// - Keyboard Event
// - Resources Event
// - Focus Event
// - View Event
// - Form Event
// - CSS Animation & Transition Effect
// - Drag & Drop Event
// - DLL