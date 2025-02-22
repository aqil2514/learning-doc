//Object adalah kumpulan nulai yang memiliki makna
//Di Javascript, Objek adalah raja. Jika kamu paham Objek, kamu paham Javascript

//Kenapa Object?
//Jika menggunakan var
// var namaMhs= 'Muhamad Aqil Maulana';
// var umurMhs= 22;
// var lulus= true;
// var IPSemester = [3.7, 3.9, 3.8, 3.6 , 3.6, 3.5, 3.6];
// function IPK(IPSemester){
//     var total = 0;
//     for(var i = 1; i < IPSemester.length; i++){
//         total += IPSemester(i);
//     }
//     return total/IPSemester.length;
// }

//Jika menggunakan Array
// var mahasiswa = ['Muhamad Aqil Maulana', 22, true, [3.7, 3.9, 3.8, 3.6 , 3.6, 3.5, 3.6]];

// function IPK(IPSemester){
//     var total=0;
//     for(var i = 0; i < IPSemester.length; i++){
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// }

// console.log(IPK(mahasiswa[3]));

//Object
// var mahasiswa = {
//     nama : 'Muhamad Aqil Maulana',
//     lulus : true,
//     IPSemester : [3.7, 3.9, 3.8, 3.6 , 3.6, 3.5, 3.6],
//     IPK : function(){
//         var total = 0;
//         var ips = this.IPSemester;
//         for(var i= 0; i < ips.length; i++){
//             total += ips[i];
//         }
//         return total/ips.length;
//     }
// }

// mahasiswa.IPK();

// var orang = {
//     nama : 'Muhamad Aqil Maulana',
//     umur : 31,
//     pekerjaan : 'Dosen', //Disebut properti
//     sapa : function(){
//         return 'Hi, nama saya ' + this.nama + 'usia saya ' + this.umur + ' tahun, dan saya adalah seorang ' +this.pekerjaan;
//     }
// }

//Variabel yang ada di dalam object disebut properti
//Function di dalam object disebut method

//PRAKTEK MEMBUAT OBJECT
var mhs ={
    nama : 'Muhamad Aqil Maulana',
    umur : 22,
    ips : [3.7, 3.9, 3.8, 3.6 , 3.6, 3.5, 3.6],
    alamat :{
        jalan : 'Jalan Perdamaian',
        kota : 'Bandung',
        provinsi : 'Jawa Barat'
    }
};