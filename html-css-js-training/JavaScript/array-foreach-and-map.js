//6. foreach

// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Muhamad', 'Aqil', 'Maulana'];
// //for( var i = 0; i < angka.length; i++){
// //    console.log(angka[i]);
// //}

// angka.forEach(function(e){
//     console.log(e);
// })

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + 'adalah : ' + e);
// })

// 7.map
// var angka2 = angka.map(function(e){
//     return e*3;
// })
// console.log(angka2.join(' - '));

// 8. sort = Digunakan untuk mengurutkan array;

// var angkaBerantakan = [5,2,3,1,8,7,5,4,0];
// console.log(angkaBerantakan.join(' - '));
// angkaBerantakan.sort();
// console.log(angkaBerantakan.join(' - '));

var angkaBerantakan2 = [113,24,13,23,4,5,2,3,2,1,23,65,4,3,76,5,4]

angkaBerantakan2.sort(function(a,b){
    return a-b;
});

console.log(angkaBerantakan2.join(' - '));