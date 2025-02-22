//Refactoring adalah sebuah proses mengubah kode agar menjadi lebih baik tanpa mengubah fungsionalitasnya.
//Manfaat refactoring:
//1. Readability: Dapat dibaca oleh sendiri dan orang lain
//2. DRY (Don`t Repeat Yourself)
//3. Testability
//4. Performance
//5. Maintainability

//Refactoring sederhana
function jumlahVolumeDuaKubus(a,b){

    return a*a*a + b*b*b;
}

console.log(jumlahVolumeDuaKubus(8,3));