// Filter & Find

//Find mengembalikan satu nilai sedangkan filter mengembalikan banyak nilai

// 9. filter
// var angka = [1,2,10,5,20,3,6,8,4];

// var angka2 = angka.filter(function(x){
//     return x > 5;
// })
// console.log(angka2.join(' - '));

// 10. find (Hanya dapat menemukan satu nilai saja)

var angka = [1,2,10,5,20,3,6,8,4];

var angka2 = angka.find(function(x){
    return x = 5;
})

console.log(angka2);