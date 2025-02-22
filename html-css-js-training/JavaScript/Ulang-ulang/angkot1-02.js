var penumpang = ['Kiki', undefined, 'Dodo'];

//Tambah penumpang
var tambahPenumpang= function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);

        return penumpang.join(', ');
    } else{
        for(i=0;i<penumpang.length;i++){        
            if(penumpang[i] == namaPenumpang){
            alert(namaPenumpang + ' sudah ada di dalam angkot');

            return penumpang.join(', ');
        } else if(i == penumpang.length-1){
            penumpang.push(namaPenumpang);

            return penumpang.join(' ,');
        } else if(penumpang[i] == undefined){
            penumpang[i] = namaPenumpang;

            return penumpang.join(', ');
        }
    }
    }
}