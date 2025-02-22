var BuatInfoAngkot = function(namaSupir, jurusan, penumpang, kas){
    this.supir = namaSupir;
    this.jurusan = jurusan;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push (namaPenumpang);

        return this.penumpang.join(', ');
    }
    
    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang == 0){
            alert('Belum ada yang naik angot!');

            return false;
        }
        for(var i=0; i<this.penumpang.length;i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                alert('Penumpang yang bernama ' + namaPenumpang + ' telah turun dan membayar sebesar Rp'+ bayar);

                return this.penumpang.join(', ');
            }
        }
    }
}

var angkot1 = new BuatInfoAngkot('Supardi', ['Bekasi, Tangerang'], [], 0);