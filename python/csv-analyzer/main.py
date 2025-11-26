from data_processor import baca_data, saring_data, hitung_statistik

DATA_FILE = "data.csv"
     
data_penjualan = baca_data(DATA_FILE)

if data_penjualan:
    print("\n Data berhasil dibaca:")
    for i, row in enumerate(data_penjualan):
        if i < 3:
            print(f"Baris {i+1}: {row}")
        else:
            break
        
    hitung_statistik(data_penjualan, 'Penjualan')
    hitung_statistik(data_penjualan, 'Pengeluaran')
    
    saring_data(data_penjualan, "Penjualan", 2500)
    saring_data(data_penjualan, "Pengeluaran", 800)
else:
    print("\n Terjadi error saat membaca data")
    
