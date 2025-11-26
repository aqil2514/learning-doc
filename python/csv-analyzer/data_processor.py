import csv

def baca_data(nama_file:str):
    data = []
    try:
        with open(nama_file, mode='r', encoding='utf-8', newline='') as file:
            reader = csv.DictReader(file)
            for row in reader:
                data.append(row)
    except FileNotFoundError:
        print(f"\n[ERROR] File '{nama_file}' tidak ditemukan")
        return None
    except Exception as e:
        print(f"\n[ERROR] Terjadi kesalahan saat memproses data {e}")
    
    return data
    
def hitung_statistik(data:list, kolom:str):
    nilai_numerik = []
    
    for baris in data:
        try:
            nilai_string = baris[kolom]
            nilai = int(nilai_string)
            nilai_numerik.append(nilai)
        except ValueError:
            print(f"[Peringatan Data Kotor] Melewatkan nilai non-numerik '{nilai_string}' di kolom '{kolom}'.")
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
    print(f"   Rata-rata: {rata_rata:.2f}") # .2f membulatkan 2 angka desimal
    print(f"   Nilai Maksimum: {maksimum}")
    print(f"   Nilai Minimum: {minimum}")

def saring_data(data:list, kolom:str, nilai_minimum:int):
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
 