// **********************************************
// ***************SPREAD OPERATOR****************
// **********************************************

// Sebuah operator yang memecah iterables menjadi single element

// const mhs = ['Muhamad', 'Aqil', 'Maulana'];

// console.log(mhs);
// console.log(...mhs);
// console.log(...mhs[0]);

//Kasus I : Menggabungkan 2 array
// const suami = ['Muhamad', 'Aqil', 'Maulana'];
// const istri = ['Farida', 'Hanum'];
// const pasutri = [...suami, ...istri];
// const pasutri = suami.concat(istri);

// const pasutri = [...suami, 'dan', ...istri];

// console.log(pasutri.join(' '));

// Kasus II: Copy Array

// const mhs = ['Muhamad', 'Aqil', 'Maulana'];
// const mhs1 = mhs; //Salah
// const mhs1 = [...mhs];
// mhs1[0] = 'Ahmad';

// console.log(mhs);
// console.log(mhs1);

// Kasus III 

// const liMhs = document.querySelectorAll('li');

// const mhs = [];
// for(let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }

// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// Kasus IV

const nama = document.querySelector('h1');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML= huruf;

console.log(huruf);