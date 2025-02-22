//Function yang baik hana mengerjakan 1 hal saja secara spesifik

//Menjumlahkan vilume 2 kubus
// Kubus a= 8, b 3
// - Ketahui sisi masing-masing kubus
// - Hitung Volume masing-masing kubus 8(3) + 3(3)
// - Jumlahkan 512+27
// - Hasil 539

//Tes jumlahin volume kubus;
//Rumus volume
function volumeKubus(a){
    var volume;
    volume = Math.pow(a, 3);

    return volume;
}

//Penjumlahan volume
var kubusA = 8;
var kubusB = 3;
var kubusC = 10;
var kubusD = 15;

console.log(volumeKubus(kubusA) + volumeKubus(kubusB) + volumeKubus(kubusC) + volumeKubus(kubusD));

//Praktek Bareng
function jumlahVolumeDuaKubus(a, b){
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeDuaKubus(3,3));