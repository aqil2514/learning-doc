// Destructuring Assingment pada return value function


//KASUS I
// function tambahKali(a,b){
//     return [a + b, a*b];
// }


// const [jumlah, kali] = tambahKali(2,3);
// console.log(jumlah);
// console.log(kali);

//KASUS II
// function kalkulasi(a,b){
//     return [a + b, a - b, a * b]; // Tidak ada pembagian
// }

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3); //urutan variabel dan return value harus sesuai.
// console.log(tambah);
// console.log(kurang)
// console.log(kali)
// console.log(bagi)

//KASUS III :  Jika ingin urutan valuenya tidak berpengaruh
// function kalkulasi(a,b){
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     };
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang);

//KASUS IV : Destructuring Function pada arguments
const mhs1 = {
    nama : 'Muhamad Aqil Maulana',
    umur : 22,
    email : 'muhamadaqil383@gmail.com',
    nilai : {
        tugas : 80,
        uts : 85,
        uas : 75
    }
}

//Pemecahannya ada di parameter

// function cetakMhs(nama, umur){
//     return `Halo, nama saya ${nama}. Saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

//Pemecahannya ada di return

function cetakMhs({nama, umur, nilai: {tugas,uts,uas}}){
    return `Halo, nama saya ${nama}. Saya berumur ${umur} tahun. Nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));