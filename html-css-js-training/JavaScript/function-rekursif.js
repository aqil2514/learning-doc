//Rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
//Rekursifharus berakhir dan menghasilkan nilai

//Pemanggilan berulang menggunakan looping
for(i=10; i>=1; i--){
    console.log(i);
}

//Base case adalah kondisi akhir dari rekursif yang menghasilkan nilai
function cetakAngka(n){
    if(n === 0){
        return;
    }//Base Case
    console.log(n)

    cetakAngka(n-1);
}

function faktorial(n){
    if (n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));

//Semua looping bisa dibuat rekursif, tapi tidak sebaliknya
//Implementasi rekursif
//1. Menggantikan looping
//2. Fibonacci
//3. Pencarian dan penelusuran pada struktur data list dan tree
//4. Bahasa pemrograman yang tidak memiliki pengulangan