# Rencana Pembuatan Sistem Manajemen Keuangan Sederhana

## 📌 Deskripsi
Sistem Manajemen Keuangan Sederhana ini akan menggunakan **Command Prompt (CMD) atau Terminal** untuk mengelola transaksi keuangan. Data akan disimpan dalam format **JSON**, sehingga mudah untuk dibaca, diedit, dan diproses tanpa perlu database.

## 🎯 Fitur Utama
1. **Menambahkan Transaksi**
   - Jenis transaksi: **Pemasukan** / **Pengeluaran**
   - Kategori (Makan, Transportasi, Gaji, dll.)
   - Jumlah
   - Deskripsi (Opsional)
   - Tanggal transaksi (otomatis diambil dari sistem)
   
2. **Melihat Riwayat Transaksi**
   - Menampilkan semua transaksi
   - Memfilter berdasarkan jenis (Pemasukan/Pengeluaran)
   - Memfilter berdasarkan rentang tanggal
   
3. **Mengedit Transaksi**
   - Mengedit transaksi berdasarkan ID
   - Memperbarui kategori, jumlah, dan deskripsi
   
4. **Menghapus Transaksi**
   - Menghapus transaksi berdasarkan ID
   - Konfirmasi sebelum penghapusan
   
5. **Lihat Ringkasan Keuangan**
   - Total pemasukan
   - Total pengeluaran
   - Sisa saldo
   - Pengeluaran terbesar
   - Kategori dengan pengeluaran tertinggi
   
## 🛠️ Teknologi yang Digunakan
- **Bahasa Pemrograman**: Java
- **Penyimpanan Data**: JSON
- **CLI (Command Line Interface)**: Menggunakan Scanner untuk input

## 📂 Struktur File
📦 FinancialManager  
 ┣ 📂Utils  
 ┃ ┗ 📜FinanceManager.java  
 ┣ 📜Main.java  
 ┗ 📜transactions.json  

## 🚀 Alur Penggunaan
1. **Menjalankan aplikasi** → Menu utama muncul
2. **Pilih opsi**
3. **Melakukan operasi** (tambah/edit/hapus transaksi)
4. **Data disimpan ke transactions.json**
5. **Kembali ke menu utama atau keluar**

## ⏳ Perkiraan Waktu Pengerjaan
- **Hari 1**: Setup proyek & struktur folder
- **Hari 2**: Implementasi fitur tambah & lihat transaksi
- **Hari 3**: Implementasi fitur edit & hapus transaksi
- **Hari 4**: Implementasi fitur ringkasan keuangan
- **Hari 5**: Testing & debugging

---
🛑 **Setelah istirahat, kita akan mulai membuat proyek ini!**

