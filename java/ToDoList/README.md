# ToDoList

Ini adalah project pertama saya yang saya buat saat belajar Java Programming.
ToDoList adalah aplikasi sederhana berbasis Java yang memungkinkan pengguna untuk mengelola daftar tugas mereka. Aplikasi ini menggunakan file `tasks.txt` sebagai tempat penyimpanan daftar tugas.

## Fitur
- Melihat daftar tugas
- Menambahkan tugas baru
- Mengedit tugas yang ada
- Menghapus tugas

## Struktur Folder
```
📦ToDoList
 ┣ 📂Utils
 ┃ ┗ 📜TaskManager.java
 ┣ 📜Main.java
 ┗ 📜tasks.txt
```

## Penjelasan Kode

### `Main.java`
- Menyediakan menu utama untuk berinteraksi dengan pengguna.
- Memanggil metode dari `TaskManager` berdasarkan input pengguna.

### `TaskManager.java`
- Mengelola operasi CRUD pada `tasks.txt`.
- Metode utama:
  - `showTasks()`: Menampilkan daftar tugas.
  - `addTasks(Scanner scanner)`: Menambahkan tugas baru.
  - `editTasks(Scanner scanner)`: Mengedit tugas yang ada.
  - `deleteTask(Scanner scanner)`: Menghapus tugas tertentu.

### `tasks.txt`
- Berisi daftar tugas yang disimpan oleh pengguna.
- Format tugas: `Nomor. Deskripsi tugas`

---
**Dibuat oleh Muhamad Aqil Maulana**

