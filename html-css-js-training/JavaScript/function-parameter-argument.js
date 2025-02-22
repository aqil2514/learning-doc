//Parameter adalah variabel yang ditulis dalam kurung pada saat function dibuat. Digunakan untuk menampung niali yang dikirimkan saat function dipanggil.
//Argument adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil

//function tambah(a,b){//a,n adalah parameter
    //return a+b;
//}

//Argument dengan langsung
//var coba = tambah(5,10); //5,10 adalah argument
//console.log(coba);

//Argument dengan variabel

//var x = 10;
//var y = 20;
//var coba2 = tambah(x,y) //x,y juga termasuk argument

//console.log(coba2);

//Argument dengan dimasukkan user bagian 1
//var a = prompt('Masukkan nilai 1');
//var b = prompt('Masukkan nilai 2');
//var coba3= tambah(a, b);

//console.log(coba3);//Hasil akan dianggap string. Apabila ditulis 10 + 20 hasilnya menjadi 1020, bukan 30.

//Argument dengan dimasukkan user bagian 2
//var c= parseInt(prompt('Masukkan nilai 1'));//parseInt fungsinya untuk mengkategorikan data sebagai Integer
//var d= parseInt(prompt('Masukkan nilai 2'));
//var coba4= tambah(c,d);

//console.log(coba4)

//Argument juga bisa berupa gabungan operasi matematika
//var e= parseInt(prompt('Masukkan nilai 1'));//parseInt fungsinya untuk mengkategorikan data sebagai Integer
//var f= parseInt(prompt('Masukkan nilai 2'));
//var coba5= tambah(e*2,f*2);

//console.log(coba5);

//Argument dapat berupa dua function
//function kali(a,b){
//    var kali= a*b;
    
//    return kali;
//}

//var coba6= kali(tambah(x,y), tambah(3,5));

//console.log(coba6);

//Bagaimana jika parameter dan argumennya tidak sesuai?
//Jika parameter lebih sedikit dari argumen, argumen lebih akan diabaikan
//function tambah(a,b) memiliki 2 parameter
//function, tambah (1, 2, 3) memiliki3 argument. Maka argumen ketiga akan diabaikan

//Jika parameter lebih banyak dari argument, parameter lebih akan diberi nilai undefined
//function tambah(a,b,c) memiliki 3 parameter
//function tambah(1,2) memiliki 2 argumen. Nilainya akan menjadi undefined

//arguments adalah array yang berisi nilai yang dikirimkan saat fungsi dipanggil -> Variabel semu
//arguments bisa menjadi argument, contoh
//function tesArguments(){
//    return arguments;
//}

//var coba7 = tesArguments(5, 10, 20, 'hi', false);
//console.log(coba7);

//Bagaimana jika ingin menjumlahkan banyak sekali data tambah menambahkan parameter? Berikut ulasannya
function tambah()//Sengaja dikosongkan
{
    var hasil = 0;
    //variabel arguments merupakan array, jadi bisa dilooping.
    for( var i= 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    //var i = digunakan untuk looping index
    return hasil;
}

var coba8= tambah(1,2,3,4,5,6,7,8,9,10);
console.log(coba8);