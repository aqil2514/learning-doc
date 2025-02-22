//SetTimeout
//setTimeout(fungsi yang dijalankan, waktunya (milisecond))

// setTimeout(tampilkanPesan, 3000); // Jalankan fungsi tampilkanPesan setelah 3000ms/3detik
// function tampilkanPesan(){
//     console.log('Hello World');
// }

//fungsi yang dijankan bisa menggunakan function anonymous
// setTimeout(function(){
//     console.log('oke')
// }, 4000);

//fungsi timeOut bisa diberhentikan di tengah-tengah
// const tes = setTimeout(function(){
//     console.log('oi');
// }, 5000);
// const h1 = document.getElementsByTagName('h1')[0];
// const tombol = document.createElement('button');
// const teksTombol = document.createTextNode('Behenti');
// tombol.appendChild(teksTombol);
// h1.after(tombol);

// tombol.addEventListener('click', function(){
//     clearTimeout(tes);
//     console.log('Selesai')
// })

//SET INTERVAL
// Sesuatu yang berulang-ulang
// const tes = setInterval(function(){
//     console.log('ok')
// }, 2000);

// const h1 = document.getElementsByTagName('h1')[0];
// const tombol = document.createElement('button');
// const teksTombol = document.createTextNode('Behenti');
// tombol.appendChild(teksTombol);
// h1.after(tombol);

// tombol.addEventListener('click', function(){
//     clearInterval(tes);
//     console.log('selesai');
// })

//PROGRAM HITUNG MUNDUR


//Cara mendapatkan waktu
const tanggalTujuan = new Date('Mar 16, 2023 09:12:0').getTime();

const hitungMundur = setInterval(function(){
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;
    
    const hari = Math.floor(selisih / (1000*60*60*24));
    const jam = Math.floor(selisih % (1000*60*60*24) / (1000*60*60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);
    
    const h1 = document.getElementsByTagName('h1')[0];
    h1.setAttribute('id', 'teks');
    h1.innerHTML = 'Waktu Anda sisa: '+ hari +' hari '+ jam +' jam '+ menit +' menit '+ detik +' detik lagi';

    if (selisih < 0){
        clearInterval(hitungMundur);
        h1.innerHTML= 'WAKTU ANDA HABIS';
    }
}, 1000);

