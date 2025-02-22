//DOM Selection Method

//getElementById() hasilnya adalah sebuah elemen
//getElementsByTagName() hasilnya adalah HTML Collection // Array
//getElementsByClassName() hasilnya adalah HTML Collection
//querySelector() hasilnya adalah element
//querySelectorAll() hasilnya adalah nodeList

// //document.getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor= '#ccc';
// judul.innerHTML = 'Sandhika Galih';

// //document.getElementsByTagName()
// const p = document.getElementsByTagName('p');
// for(i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize= '50px';

// //document.getElementsByClassName()
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari Javascript'

// document.querySelector() Selector yang dimaksud ini adalah selector css
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor= 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah dari Javascript';//Hanya seleksi satu

// document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for(let i = 0; i<p.length; i++){
//     p[i].style.backgroundColor= 'lightblue';
// }

//Mengubah node root
// const sectionb = document.getElementById('b');
// const p4 = sectionb.querySelector('p');
// p4.style.backgroundColor = 'orange';