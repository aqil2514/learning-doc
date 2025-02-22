//Penumpang naik

// Jika angkot kosong, penumpang naik duduk di kursi pertama
// Penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// Jika ada yang turun, penumpang naik berikutnya akan duduk di kursi kosong terlebih dahulu
// Kursi tidak akan penuh
// Nama penumpang naik turun, tidak boleh sama

var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        //keluar fungsi
        return penumpang;
    } else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;

                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {

                console.log(namaPenumpang + ' sudah ada di dalam angkot');

                return penumpang;
            }
            
            else if(i == penumpang.length - 1){
                penumpang.push(namaPenumpang);

                return penumpang;
            }
        }
    }
}

//Hapus Penumpang
var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('Angkot masih kosong');
    } else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;

                return penumpang;
            } else if( i == penumpang.length - 1){
                console.log(namaPenumpang + ' tidak ada di dalam');
            }
        }
    }
}