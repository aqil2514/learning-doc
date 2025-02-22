//Arrow-Function

 //Bentuk lain yang lebih ringkas dari Function Expression

 //FUNCTION EXPRESSION
//  let tampilPesan = function(nama){
//     alert('halo ' + nama);
//  }

//  tampilPesan('Sandhika');

 //ARROW FUNCTION
//  let tampilPesan = (nama) =>{ //Keyword Function hilang dan setelah argument diberi =>
//     alert(`Halo ${nama}`);
//  }

//  tampilPesan('Sadhika');

//Bisa disederhanakan menjadi berikut
// let tampilPesan = (nama) =>{return `Halo ${nama}`};
// console.log(tampilPesan('Aqil'));

//2 Parameter/Argumen
// const tampilNama = (nama, waktu) =>{
//     return `Selamat ${waktu} ${nama}`;
// }

// console.log(tampilNama('Aqil', 'Pagi'));

//Jika hanya satu parameter, bisa ditulis lebih ringkas lagi
//Disebut dengan implisit return;
// let tampilPesan = nama => `Halo ${nama}`;
// console.log(tampilPesan('Aqil'));

//Jika tanpa parameter, wajib tulis ();
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ['Muhamad Aqil Maulana', 'Farida Hanum', 'Nova Maulianty'];

//Menghitung jumlah huruf dengan cara normal
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// })
// console.log(jumlahHuruf)

//Menghitung jumlah huruf dengan Arrow Function

// let jumlahHuruf = mahasiswa.map (nama => nama.length);
// console.log(jumlahHuruf);

// Memetakan sebagai objek
// let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jumlahHuruf:nama.length}));
// console.table(jumlahHuruf);

//Jika properti sama dengan nilai, bisa disederhanakan sebagai berikut
// let jumlahHuruf = mahasiswa.map(nama => ({nama, jumlahHuruf:nama.length}));
// console.table(jumlahHuruf);

//THIS PADA ARROW FUNCTION

//Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'Aqil';
//     this.umur = '22';
//     this.sayHello = function(){
//         console.log('Hao');
//     }
// }

// Arrow Function

// const Mahasiswa = function(){
//     this.nama = 'Aqil';
//     this.umur = 22;
//     this.sayHello = () =>{
//         console.log('Halo')
//     }
// }

// const Aqil = new Mahasiswa();

//Object Literal

// const mhs1 = {
//     nama:'Aqil',
//     umur: 33,
//     sayHello: function(){
//         console.log('Halo');
//     }
// }




//PRAKTEK
const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        [satu,dua] =[dua,satu];
    }

    this.classList.toggle(satu);

    setTimeout(()=>{
        this.classList.toggle(dua);
    }, 600)
})










