//Ambil semua elemen video
//Pilih hanya yang JAVASCRIPT LANJUTAN
//Ambil durasi masing-masing video
//Ubah durasi menjadi float, ubah menit menjadi detik
///Jumlahkan semua detiknya
//Ubah formatnya jadi jam, menit, detik
//Simpan di DOM

const videos = Array.from(document.querySelectorAll('[data-duration]'));
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
.map(waktu => waktu.dataset.duration)
.map(item =>{
    const part = item.split(':').map(part => parseFloat(part));
    return (part[0] * 60) + part[1];
})
.reduce((acc,cur) => acc+cur);

const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

console.log(detik);