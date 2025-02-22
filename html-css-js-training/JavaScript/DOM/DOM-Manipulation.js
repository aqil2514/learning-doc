// DOM Manipulation

// Manipulasi Element
// Manipulasi Node

// innerHTML = Mengubah isi dari teks
// style = Mengubah CSS
// setAttribute() = Memanipulasi atribut
// element.classList = Memanipulasi class

// element.innerHTML 

// var judul = document.getElementById('judul');
// judul.innerHTML = '<em>Muhamad Aqil Maulana</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

// element.style

// const judul = document.querySelector('#judul');
// judul.style.color='lightblue';
// judul.style.backgroundColor='salmon';

// // element.setAttribute()/getAttribute()//removeAttribute()

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Aqil');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// //getAttribute('Nama atribut') untuk mengetahui atribut
// //removeAttribute('Nama atribut') untuk menghapus atribute

// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label'); //setAtribute dapat menimpa class sebelumnya.

// element.classList = untuk mengelola class
// add() = Menambah class
// remove() = Menghilangkan class
// toggle() = Menambahkan dan menghapus class tertentu

// item() = Mengetahui class tertentu
// contains() = Mengecek element class tertentu
// replace() = Mengganti class 

// const p2 = document.querySelector('.p2');

// *****UNCOMMENT DARI SINI!*****
// MANIPULASI NODE
// Kumpulan beberapa kode
// document.createElement()
// document.createTextNode()
// Node.appendChild()
// Node.insertBefore()
// parentnode.removeChild()
// parentnode.replaceChild()

// STUDI KASUS I (MEMBUAT PARAGRAF BARU DENGAN JAVASCRIPT)
// 1. Buat element baru
const pBaru = document.createElement('p');
// 2. Bikin tulisannya
const teksPBaru = document.createTextNode('Paragraf Baru');
// 3. Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// 4. Tampilkan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); //sectionA disebut element parent.

// STUDI KASUS II (MEMBUAT LIST ITEM BARU SETELAH ITEM 1 SEBELUM ITEM 2)

// 1. Buat element li baru
const liBaru = document.createElement('li');
// 2. Bikin tulisannya
const teksLiBaru = document.createTextNode('Item Baru');
// 3. Masukkan teks ke dalam li
liBaru.appendChild(teksLiBaru);
// 4. Seleksi ul & element li berikutnya
const ul = document.querySelector('section#b ul');
const li2= ul.querySelector('li:nth-child(2)');
// 5. Masukkan ke list 2
ul.insertBefore(liBaru, li2); // liBaru = Apa yang mau ditambah? || li2 = lokasinya

// STUDI KASUS III (MENGHAPUS LINK INSTAGRAM)

//1. Tangkep parent dulu
const link = document.getElementsByTagName('a')[0];

//2. Hapus
sectionA.removeChild(link);

// STUDI KASUS IV (MENGGANTI PARAGRAF 4 DENGAN JUDUL BARU DENGAN ELEMENT H2)

// 1. Tangkap dulu parent
const sectionB = document.getElementById('b');

// 2. Seleksi element yang mau diganti
const p4 = sectionB.querySelector('p');

// 3. Buat element baru
const h2Baru = document.createElement('h2');

// 4. Buat teks untuk element baru
const teksH2Baru = document.createTextNode('Judul Baru');

// 5. Masukkan teksnya ke dalam h2
h2Baru.appendChild(teksH2Baru);

// 6. Lakukan replacenya
sectionB.replaceChild(h2Baru, p4);

//Element baru
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';