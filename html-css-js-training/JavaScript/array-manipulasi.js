//Manipulasi Array

//1. Menambah isi Array
//var arr= ['a', 1, true];
//atau
//var arr1 = [];
//arr[0] = 1;
//arr[1] = 2;
//arr[2] = 3;

//2. Menghapus isi Array
//var nama=['Muhammad', 'Aqil', 'Maulana'];
//nama[1]= undefined;

//console.log(nama);

//3.Menampilkan isi Array
//var nama= ['Muhamad', 'Aqil', 'Maulana', 'Dodo'];
//for(var i=0; i < nama.length; i++){
//    console.log('Mahasiswa ke-' + (i+1) + ': ' + nama[i]);
//}

//array method (length, join)
//join = Menggabungkan isi array dan ubah menjadi string
var nama= ['Muhamad', 'Aqil', 'Maulana', 'Dodo'];

//push, pop, shift, unshift digunakan untuk menambah atau menghapus elemen array
//1. push memasukkan elemen baru di elemen akhir dan dapat langsung sekaligus nambah beberapa elemen
nama.pop();
nama.pop();
console.log(nama.join(' - '));

//2. pop menghapus element akhir
nama.pop();

//3. Unshift: Menambahkan array baru di awal kalimat
nama.unshift('Dono');
console.log(nama.join());

//4. Shift
nama.shift('Dono');
console.log(nama.join());