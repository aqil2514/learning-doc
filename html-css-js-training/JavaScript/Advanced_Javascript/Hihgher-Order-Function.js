// HIGHER ORDER FUNCTION

//Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value.
//Javascript memperlakukan function sebagai object

// function kerjakanTugas(matakuliah,selesai){
//     // kerjakanTugas = Higher Order Function
//     // selesai = Callback
//     console.log(`Mulai mengerjakan tugas ${matakuliah}...`)
//     selesai(); //Function sebagai argumen
// }

// function selesai(){
//     alert('Selesai mengerjakan Tugas');
// }


// kerjakanTugas('Pemrograman Web', selesai);

// setTimeout(function(){
//     // setTimeout bisa dikatakan sebagai Higher Order Function
//     // Functionnya disebut sebagai Callback
//     console.log('Hello World')
// }, 1000);

// const buttonNew = document.createElement('button');
// buttonNew.setAttribute('class', 'submit');
// const teksButtonNew = document.createTextNode('tombol');
// buttonNew.appendChild(teksButtonNew);
// document.body.after(buttonNew);
// const tombol = document.querySelector('.submit');

// tombol.addEventListener('click', function(){
//     //addEventListener bisa disebut Higher Order Function
//     //Functionnya disebut sebagai Callback
//     console.log('tombol ditekan!');
// })

// function ucapkanSalam(waktu){
//     //Function ucapkanSalam juga bisa disebut sebagai Higher Order Function
//     return function(nama){
//     //Return valuenya function
//         console.log(`Halo ${nama}! Selamat ${waktu}. Semoga harimu menyenangkan!`);
//     }
// }

// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('Sandhika'));

// Alasan menggunakan Higher Order Function
// 1.Abstraksi = Agar bisa lebih simpel
// Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan pula programmernya.

// let total = 0, count = 1;
// while (count <= 10){
//     total += count;
//     count + 1;
// }
// console.log(total);

// console.log(sum(range(1,10)));

//VERSI FULL
// for (let i =0; i <= 100;i++){
//     console.log(i);
// }

//VERSI HIGHER ORDER FUNCTION
// function repeatLog(n){
//     for(let i =0; i<n; i++){
//         console.log(i);
//     }
// }

// repeatLog(100); // Tidak perlu mengubah looping

// function repeat(n, action){
//     for(let i=0; i<=n; i++){
//         action(i);
//     }
// }

// repeat(10, console.log);
// repeat(2, alert);

// CONTOH HIGHER ORDER FUNCTION
// Array.prototype.map();
// Array.prototype.filter();
// Array.prototype.reduce();


//FOR
// const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// Filter

//Versi Full
// const newAngka = angka.filter(function(a){
//     return a >=3;
// })

//Versi Arrow Function

// const newAngka = angka.filter (a => a>= 3);


// console.log(newAngka);

//MAP
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

//REDUCE
// Jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator+currentValue, 0);

// console.log(newAngka);
//Acumultor: hasil dari akumulasi
//currentValue: Nilai saat ini
//Setelah currentvalue, seharusnya ada angka 0 secara defau

//Method Chaining
//Cari angka >5
//Kali 3
//jumlahkan

// const hasil = angka.filter(a => a > 5) // 8,9,9
// .map(a => a*3) // 24, 27, 27
// .reduce((acc, cur) => acc+cur);

// console.log(hasil);

