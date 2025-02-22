//TEMPLATE LITERAL

//Template Literal adalah string yang memungkinkan adanya expression di dalamnya

//String Literal bisa menggunakan ' "" dan ``;

//Template Literal hanya dapat digunakan `` 
//Multiilne string, Embedded Expression, HTML Fragments, Expression Interpolation, Tagged Template dapat dilakukan dengan ``

//Contoh Multi line string
`String text baris 1
String text baris 2
String teaxt baris 3`

//Contoh Embedded Expression
`String text ${expression} string text`

//Tagged template
tag `string text ${expression} string text`

//MULTI LINE STRING
console.log('string1\nstring 2'); //Jika menggunakan single quote
console.log(`string1
string 2`);// Jika menggunakan double tick

//MULTI LINE STRING (HTML Fragments)
const mhs = {
    nama: 'Sandhika Galih',
    umur: 33,
    nrp: '043040023',
    email: 'sandhikagalih@unpas.ad.id'
}

let el='';
el += '<div class="mhs">';
el += '<h2>' + mhs.nama + '</h2>';
el += '<span class="nrp">' + mhs.nrp + '</span>';
el += '</div>';

//MULTI STRING DENGAN TEMPLATE LITERAL
const mhs2 = {
    nama: 'Sandhika Galih',
    umur: 33,
    nrp: '043040023',
    email: 'sandhikagalih@unpas.ad.id'
}

let el2 = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`

//EMBEDDED EXPRESSION
//Contoh
const nama1 = 'Sandhika Galih';
let umur = 33;
console.log(`Halo, pekernalkan nama saya ${nama1}, saya ${umur} tahun.`);
console.log(`${alert('halo')}`);//Embedded Expression dapat menyimpan alert

const x = 10;
console.log(`${(x % 2 == 0)? 'genap' : 'ganjil'}`); // Bisa menyimpan Ternary Operation

//EXPRESSION Interpolation
let a = 10;
let b = 15;
console.log('Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ' + (a + b) + ', bukan ' + (2*a+b));

//Bisa menjadi
let a1 = 10;
let b1 = 15;
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah ${a1+b1}, bukan ${2*a1+b1}`);