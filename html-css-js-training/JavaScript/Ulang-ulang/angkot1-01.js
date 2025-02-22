// Membuat Aplikasi Sederhana Pengelolaan Penumpang Angkot

var penumpang = [];

// 1. Tambah Penumpang
var tambahPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);

        return penumpang;
    } else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;

                return penumpang;
            } else if(penumpang[i] == namaPenumpang){
                console.log (namaPenumpang + ' sudah ada di dalam angkot');

                return penumpang;
            } else if(i == penumpang.length - 1){
                penumpang.push (namaPenumpang);

                return penumpang;
            }
        }
    }
}

// 2. Hapus penumpang
var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('Angkot masih kosong');

        return penumpang;
    }else {
        for(i=0;i<penumpang.length;i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;

                return penumpang;
            } else if(i == penumpang.length - 1){
                console.log(namaPenumpang + ' belum menaiki angkot');

                return penumpang;
            }
        }
    }
}
// jika tidak ada nama yang sesuai
// tampilkan pesan kesalahannya
// kembalikan isi array dan keluar dari function