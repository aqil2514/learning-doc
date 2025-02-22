// REST PARAMETER

//Representasi argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunc (a,b, ...myArgs){ // Hanya bisa digunakan di akhir parameter
// return `${a} ${b} ${myArgs}`; // Bentuk myArg langsung array
// }

// console.log(myFunc(1,2,3,4,5))

// function jumlah(...angka){
//     // let total = 0;
//     // for(const a of angka){
//     //     total += a;
//     // }

//     // return total;

//     return angka.reduce((a,b) => a+b);
// }

// console.log(jumlah(1,2,3,4,5));

// Array Destructuring

// const kelompok1 = ['Adel', 'Ara', 'Dodo', 'Dodi', 'Didi'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua)
// console.log(wakil)
// console.log(anggota.join(' '))

//Object Destructuring

// const team = {
//     pm: 'Sandhika',
//     frontEnd1: 'Dody',
//     frontEnd2: 'Erik',
//     backEnd : 'Fajar',
//     ux : 'Hendra',
//     devOps : 'Ferry'
// }

// const {pm, ...myTeam} = team;
// console.log(pm);
// console.log(myTeam);

//Filtering

// function filterBy(type, ...values){
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy('number', 1,2,'Sandhika', false, 10, true, 'Dody'));
// console.log(filterBy('boolean', 1,2,'Sandhika', false, 10, true, 'Dody'));
// console.log(filterBy('string', 1,2,'Sandhika', false, 10, true, 'Dody'));