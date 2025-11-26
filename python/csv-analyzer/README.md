🏗️ Tahap 1: Struktur Folder Baru
Kita akan mengatur ulang proyek Anda menjadi dua file Python:

main.py: Berfungsi sebagai titik masuk program Anda (entry point). Tugasnya hanya memanggil fungsi-fungsi dari modul lain.

data_processor.py: Berisi semua fungsi inti yang melakukan pekerjaan berat: membaca CSV, menghitung statistik, dan menyaring data.

📝 Perubahan Struktur Folder:
Folder/File	Peran
csv-analyzer/	Direktori Proyek Utama
data.csv	File Data
main.py	Titik Masuk (Baru)
data_processor.py	Modul Fungsi Inti (Baru)
venv/	Virtual Environment

Ekspor ke Spreadsheet

✂️ Tahap 2: Buat Modul data_processor.py
Pindahkan semua fungsi inti dari main.py ke file baru bernama data_processor.py.

Konten data_processor.py:
Python

# data_processor.py

import csv

# --- 1. FUNGSI BACA DATA ---
def baca_data(nama_file: str):
    data = []
    try:
        # Fungsi pembacaan data (Tidak berubah)
        with open(nama_file, mode='r', encoding='utf-8', newline='') as file:
            reader = csv.DictReader(file)
            for row in reader:
                data.append(row)
    except FileNotFoundError:
        print(f"\n[ERROR] File '{nama_file}' tidak ditemukan.")
        return None
    except Exception as e:
        print(f"\n[ERROR] Terjadi kesalahan saat memproses data: {e}")
        return None
    
    return data

# --- 2. FUNGSI HITUNG STATISTIK ---
def hitung_statistik(data: list, kolom: str):
    # Pindahkan seluruh kode hitung_statistik di sini (Tidak berubah)
    # ... (Isi kode hitung_statistik dari respons sebelumnya)
    nilai_numerik = []
    
    for baris in data:
        try:
            nilai_string = baris[kolom]
            nilai = int(nilai_string)
            nilai_numerik.append(nilai)
        except ValueError:
            print(f"  [Peringatan Data Kotor] Melewatkan nilai non-numerik '{nilai_string}' di kolom '{kolom}'.")
            continue
        except KeyError:
            print(f"[ERROR] Kolom '{kolom}' tidak ditemukan dalam file CSV.")
            return
            
    if not nilai_numerik:
        print(f"\n[INFO] Kolom '{kolom}' tidak memiliki data numerik yang valid untuk dihitung.")
        return
    
    total = sum(nilai_numerik)
    rata_rata = total / len(nilai_numerik)
    minimum = min(nilai_numerik)
    maksimum = max(nilai_numerik)
    
    print(f"\n📊 Statistik Hasil Analisis Kolom '{kolom}':")
    print(f"   Total Nilai: {total}")
    print(f"   Jumlah Data Valid: {len(nilai_numerik)}")
    print(f"   Rata-rata: {rata_rata:.2f}")
    print(f"   Nilai Maksimum: {maksimum}")
    print(f"   Nilai Minimum: {minimum}")


# --- 3. FUNGSI SARING DATA ---
def saring_data(data: list, kolom: str, nilai_minimum: int):
    # Pindahkan seluruh kode saring_data di sini (Tidak berubah)
    # ... (Isi kode saring_data dari respons sebelumnya)
    hasil_saring = []

    for baris in data:
        try:
            nilai = int(baris[kolom])
            if nilai > nilai_minimum:
                hasil_saring.append(baris)
        except ValueError:
            continue
        except KeyError:
            print(f"[ERROR] Kolom '{kolom}' tidak ditemukan untuk penyaringan.")
            return []

    if hasil_saring:
        print(f"\n🔍 Hasil Penyaringan Kolom '{kolom}' (Nilai > {nilai_minimum}):")
        for baris in hasil_saring:
            print(f"   Bulan: {baris.get('Bulan', 'N/A')}, Penjualan: {baris.get('Penjualan', 'N/A')}")
    else:
        print(f"\n[INFO] Tidak ada data di kolom '{kolom}' yang melebihi {nilai_minimum}.")

    return hasil_saring
🔌 Tahap 3: Modifikasi main.py
File main.py sekarang hanya akan berisi variabel konfigurasi dan logika pemanggilan utama. Kita akan menggunakan perintah from ... import ... untuk mengakses fungsi-fungsi dari data_processor.py.

Konten main.py (Baru):
Python

# main.py

# 1. IMPOR FUNGSI DARI MODUL data_processor
from data_processor import baca_data, hitung_statistik, saring_data

# Variabel konfigurasi
DATA_FILE = "data.csv"

# --- LOGIKA UTAMA PROGRAM ---
def main():
    # Panggil fungsi baca_data dari modul
    data_penjualan = baca_data(DATA_FILE) 

    if data_penjualan:
        print("\n✅ Data berhasil dibaca:")
        
        # Tampilkan 3 baris pertama
        for i, row in enumerate(data_penjualan):
            if i < 3:
                print(f"Baris {i+1}: {row}")
            else:
                break
                
        # Panggil Fungsi Statistik
        hitung_statistik(data_penjualan, 'Penjualan')
        hitung_statistik(data_penjualan, 'Pengeluaran')
        
        # Panggil Fungsi Penyaringan
        saring_data(data_penjualan, 'Penjualan', 2500) 
        saring_data(data_penjualan, 'Pengeluaran', 800)

    else:
        print("\n❌ Proses dibatalkan karena gagal membaca data.")

# Baris ini memastikan fungsi main() hanya dijalankan saat file dieksekusi langsung
if __name__ == "__main__":
    main()
🧠 Penjelasan Kunci Modularisasi
from data_processor import ...: Ini adalah cara kita mengimpor fungsi (baca_data, hitung_statistik, saring_data) dari file data_processor.py.

Fungsi main(): Menjadi praktik standar untuk membungkus logika utama program Anda dalam sebuah fungsi main() saat Anda memodularisasi.

if __name__ == "__main__":: Ini adalah pola standar Python. Ini memastikan bahwa fungsi main() Anda hanya dijalankan ketika file main.py dieksekusi secara langsung (python main.py), dan tidak akan dijalankan jika file ini diimpor sebagai modul oleh file lain.

Dengan struktur ini, proyek Anda telah dipecah menjadi modul-modul yang bertanggung jawab penuh atas tugasnya masing-masing!

Apakah Anda ingin menambahkan fungsi baru, misalnya, untuk menuliskan hasil analisis ke file teks baru?