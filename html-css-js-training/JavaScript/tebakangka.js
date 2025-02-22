//Player
alert('BLOM SELESAI');
var p = prompt('Pilih angka! (1 - 10)');

//Computer
var com = Math.random() * 10;
if(com < 1 ){
    com = 1;
}else if(com < 2){
    com = 2;
}else if(com < 3){
    com = 3;
}else if(com < 4){
    com = 4;
}else if(com < 5 ){
    com = 5;
}else if(com < 6){
    com = 6;
}else if(com < 7 ){
    com = 7;
}else if(com < 8 ){
    com = 8;
}else if(com < 9 ){
    com = 9;
}else {
    com = 10;
}


//rule
var hasil= '';
var kesempatan = 3;

if(p == com){
    hasil = 'BENAR';
    alert('Pilihanmu : ' + p +'\nLawanmu : ' + com + '\nHasilnya : Kamu ' + hasil);
} else if (p != com){
    hasil = 'SALAH'
    kesempatan--;
    alert('Pilihanmu salah! \nKesempatanmu sisa : ' + kesempatan);
}

//Kesempatan
if(kesempatan == 0){
    alert('GAME OVER!');
}

console.log('Player : ' + p);
console.log("Computer : " + com);
console.log('Hasilnya : ' + hasil);

//Rule