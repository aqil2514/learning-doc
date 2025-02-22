// DESTRUCTURING ASSIGMENT

// Expression pada Javascript yang membuat kita dapat 'membongkar' nilai dari Array atau properti Object ke dalam variabel yang terpisah.

// **************************************************
// **************CONTOH ARRAY:***********************
// **************************************************
// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// console.log(a) // 'satu'
// console.log(b) // 'dua'
// console.log(c) // 'tiga'

// // Jika ingin skip array tertentu

// const tes =['halo', 'nama', 'saya', 'Muhamad Aqil Maulana']; //Variabel dasar

// const [salam, , , name] = tes; //

// SWAP ITEMS
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a , b] = [b, a];
// console.log(a);
// console.log(b);

//RETURN VALUE PADA FUNCTION
// function coba(){
//     return[1,2];
// }

// const [a, b] = coba();
// console.log(b);

// REST PARAMETER
// Digunakan apabila isi array lebih banyak daripada Destructuring Variable

// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(values); // (7) [2, 3, 4, 5, 6, 7, 8]

// **************************************************
// **************CONTOH OBJECT***********************
// **************************************************

//contoh object
// const mhs = {
//     nama : 'Sandhika Galih',
//     umur : 33,
//     email : 'sandhikagalih@unpas.ac.id'
// };

// const {nama, umur, email} = mhs;
// console.log(nama) // 'Sandhika Galih'
// console.log(umur) // 33
// console.log(email)// 'sandhikagalih@unpas.ac.id'

// Assignment tanpa deklarasi object

// ({nama, umur} = {nama : 'Sandhika Galih', umur: 33});
// console.log(nama); // Sandhika Galih
// console.log(umur); // 33

// Assign ke Variabel Baru
// const mhs = {
//     nama : 'Sandhika Galih',
//     umur : 33,
//     email : 'sandhikagalih@unpas.ac.id'
// };

// const {nama : n, umur : u, email : e} = mhs;
// console.log(n) // 'Sandhika Galih'
// console.log(u) // 33
// console.log(e)// 'sandhikagalih@unpas.ac.id'

// Memberikan Default Value
// const mhs = {
//     nama : 'Sandhika Galih',
//     umur : 33
// };

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(nama) // 'Sandhika Galih'
// console.log(umur) // 33
// console.log(email)// 'email@default.com

//Rest Parameter

// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// }

// const {nama, ...value} = mhs;
// console.log(value);

// Mengambil filed pada object setelah dikirim sebagai parameter untuk function

// const mhs = {
//     id: 123,
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// }

// function getIdMhs({id}){
//     return id;
// }

// console.log(getIdMhs(mhs));