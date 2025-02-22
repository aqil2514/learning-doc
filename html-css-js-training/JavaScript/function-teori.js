//Menurut Douglas Crockfor, funtion adalah kunci utama pada javascript yang membuat javascript sangat powerful.
//Function adalah sebuah sub-program yang dapat dipanggil di bagian lain pada program
//Function merupakan sturktur dasar pemebtnuk dari javascript
//Disebut juga sebagai prosedur.
//Untuk menggunakannya, kita harus membuat dahulu, lalu baru dapat dipanggil.
//Function termasuk ke dalam First-Class Object

//*Kenapa harus function?*
// - Reusability (DRY : Do Not Repeat Yourself)
// - Dekomposisi / Abstraksi
// - Modularitas


// Kategori Function
// Built-in Function = Sudah tersedia oleh Javascript, kita tinggal memanggilnya saja
// User-Defined Function = Dibuat sendiri

//Built-In Function
// Contoh, alert(); confirm();, prompt();
// Function lain dapat dilihat dengan cara kunjungi https://www.w3schools.com/jsref/jsref_obj_string.asp

//charAt berfungsi untuk menampilkan karakter apa yang berada dalam nomor tertentu, contoh:
var nama ="Aqil"; //Variabel Awal
console.log(nama.charAt(0)); //Bacanya, Variable ke tiga (dari nol itungnya) itu apa?

//User-defined Function
// Merupakan fungsi yang kita buat sendiri
// Caranya, gunakan keyword Function + nama function (optional)
// Di dalam Function, gunakan argumen / parameter (opsional, jika ada boleh lebih dari satu)
// Parameter disimpan dalam ()
// Jika parameter lebih dari 1, gunakan koma
// Function body harus menggunakan {}
// Function dapat mengembalikan nilai (return value) atau tidak

//Membuat user-defined function
// Function declaration, contoh
function jumlahDuaBilangan(a, b){ //Sturktur -> keyword + nama function + (parameter, opitional);
    var total;
    total = a + b; //function body

    return total;//nilai kembalian / return value (oprional)
}

//Function expression, contoh
var jumlahDuaBilangan = function(a,b){
    var total;
    total = a + b;

    return total;
}

//Memanggil function
//alert(jumlahDuaBilangan(1,2)) -> contoh
console.log(jumlahDuaBilangan(5,6));