# main.py
import kalkulator

def main():
    print("Kalkulator Sederhana")
    while True:
        print("\nPilih operasi:")
        print("1. Penambahan (+)")
        print("2. Pengurangan (-)")
        print("3. Perkalian (*)")
        print("4. Pembagian (/)")
        print("5. Perpangkatan (^)")
        print("6. Akar Kuadrat (√)")
        print("7. Konversi Fahrenheit ke Celcius")
        print("8. Konversi Celcius ke Fahrenheit")
        print("9. Konversi Meter ke Inch")
        print("10. Konversi Inch ke Meter")
        print("11. Luas Persegi Panjang")
        print("12. Volume Balok")
        print("13. Volume Kubus")
        print("14. Volume Tabung")
        print("15. Volume Bola")
        print("16. Keluar")

        pilihan = input("Masukkan nomor operasi atau ketik '16' untuk keluar: ")

        if pilihan == '16':
            print("Terima kasih telah menggunakan kalkulator. Sampai jumpa!")
            break

        if pilihan not in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']:
            print("Pilihan tidak valid. Silakan coba lagi.")
            continue

        if pilihan in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']:
            angka1 = float(input("Masukkan angka pertama: "))
            angka2 = float(input("Masukkan angka kedua: "))
            if pilihan == '1':
                print("Hasil:", kalkulator.tambah(angka1, angka2))
            elif pilihan == '2':
                print("Hasil:", kalkulator.kurang(angka1, angka2))
            elif pilihan == '3':
                print("Hasil:", kalkulator.kali(angka1, angka2))
            elif pilihan == '4':
                print("Hasil:", kalkulator.bagi(angka1, angka2))
            elif pilihan == '5':
                print("Hasil:", kalkulator.pangkat(angka1, angka2))
            elif pilihan == '6':
                print("Hasil:", kalkulator.akar_kuadrat(angka1))
            elif pilihan == '7':
                print("Hasil:", kalkulator.fahrenheit_ke_celcius(angka1))
            elif pilihan == '8':
                print("Hasil:", kalkulator.celcius_ke_fahrenheit(angka1))
            elif pilihan == '9':
                print("Hasil:", kalkulator.meter_ke_inch(angka1))
            elif pilihan == '10':
                print("Hasil:", kalkulator.inch_ke_meter(angka1))
            elif pilihan == '11':
                panjang = float(input("Masukkan panjang: "))
                lebar = float(input("Masukkan lebar: "))
                print("Luas persegi panjang:", kalkulator.luas_persegi_panjang(panjang, lebar))
        else:
            sisi = float(input("Masukkan panjang sisi: "))
            tinggi = float(input("Masukkan tinggi: "))
            if pilihan == '12':
                print("Volume balok:", kalkulator.volume_balok(sisi, lebar, tinggi))
            elif pilihan == '13':
                print("Volume kubus:", kalkulator.volume_kubus(sisi))
            elif pilihan == '14':
                print("Masukkan jari-jari tabung: ")
                jari_jari = float(input())
                print("Masukkan tinggi tabung: ")
                tinggi = float(input())
                print("Volume tabung:", kalkulator.volume_tabung(jari_jari, tinggi))
            elif pilihan == '15':
                print("Masukkan jari-jari bola: ")
                jari_jari = float(input())
                print("Volume bola:", kalkulator.volume_bola(jari_jari))

if __name__ == "__main__":
    main()
