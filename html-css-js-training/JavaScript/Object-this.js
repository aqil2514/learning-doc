//This

// This
// Sebuah keyword spesial yang otomatis mendefinisikan suatu object
// window === this

// Function Declaration
// function halo(){
//     console.log(this);//Scopenya adalah global
//     console.log('halo');
// }
//This mengembalikan object global

// // Object LIteral
// var obj = {a: 10, b:20};
// obj.halo= function(){
//     console.log(this);
//     console.log('Halo');
// }

// obj.halo();
// // This mengembalikan object yang bersangkutan

// Constructor Function
function Halo(){
    console.log(this);
    console.log('halo');
}

new Halo();
//This mengembalikan object yang baru dibuat