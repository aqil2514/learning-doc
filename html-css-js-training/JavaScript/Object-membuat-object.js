// Membuat object pada javascript
// object literal
// function declaration
// constructor function (keyword new)
// Object.create()

// Object Literal
var mhs1 = {
    //Key dan value
    nama : 'Muhamad Aqil Maulana',
    nrp : '2878129372813',
    email : 'muhamadaqil383@gmail.com',
    jurusan: 'Teknik Informatika'
}

var mhs2 = {
    //Key dan value
    nama : 'Dody',
    nrp : '24229372813',
    email : 'dodydodo@yahoo.com',
    jurusan: 'Teknik Informatika'
}

// Function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3 = buatObjectMahasiswa('Adel', '1232321', 'dedeladel@gmail.com', 'Tataboga');

// Constructor (Namanya huruf besar di awal)
function Mahasiswa(nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
//Constructor tidak perlu var dan return

var mhs4 = new Mahasiswa('Erik', '21312421', 'Erikerigo@mhs.com', 'Tarjamah');//Wajib pakek new