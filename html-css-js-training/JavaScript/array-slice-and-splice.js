//Array slice and splice

//Slice: Digunakan untuk mengambil beberapa pada array untuk mengambil array baru
//Splice: Menyisipkan

// 4. Splice
// Splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2, ...)
//var arr = ['Muhamad','Aqil', 'Maulana'];
///arr.splice(1, 2, 'dan', 'Aqil');

//console.log(arr.join(' '));

//5. Slice = Mengiris sebuah array menjadi array baru
// slice(indexAwal, indexAkhir);
var arr =['Muhamad', 'Aqil', 'Maulana', 'dan', 'Kawan-kawan'];

var arr2 = arr.slice(1,3);

console.log(arr2.join(' - '));
console.log(arr.join(' - '));