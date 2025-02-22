var penumpang= [];

//Tambah Penumpang
var tambahPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);

        return penumpang.join(', ');
    } else{
        for(var i = 0; i < penumpang.length; i++){
            if (penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;
                
                return penumpang.join(', ');
            } else if(penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
            } else if(i == penumpang.length - 1){
                penumpang.push(namaPenumpang);

                return penumpang.join(', ');
            }
        }
    }
}

//Hapus Penumpang
var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('Angkot masih kosong!')
    } else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;

                return penumpang.join(', ');
            } else if(i == penumpang.length - 1){
                console.log(namaPenumpang + ' tidak ada di angkot');
            }
        }
    }
}