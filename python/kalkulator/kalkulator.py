# kalkulator.py
import math

# Fungsi-fungsi operasi matematika dasar
def tambah(a, b):
    return a + b

def kurang(a, b):
    return a - b

def kali(a, b):
    return a * b

def bagi(a, b):
    if b == 0:
        return "Tidak bisa dibagi oleh nol!"
    return a / b

def pangkat(a, b):
    return a ** b

def akar_kuadrat(a):
    if a < 0:
        return "Angka harus non-negatif!"
    return math.sqrt(a)

# Fungsi-fungsi konversi satuan dan perhitungan geometri
def fahrenheit_ke_celcius(fahrenheit):
    return (fahrenheit - 32) * 5/9

def celcius_ke_fahrenheit(celcius):
    return (celcius * 9/5) + 32

def meter_ke_inch(meter):
    return meter * 39.3701

def inch_ke_meter(inch):
    return inch * 0.0254

def luas_persegi_panjang(panjang, lebar):
    return panjang * lebar

def volume_balok(panjang, lebar, tinggi):
    return panjang * lebar * tinggi

def volume_kubus(sisi):
    return sisi ** 3

def volume_tabung(jari_jari, tinggi):
    return math.pi * jari_jari ** 2 * tinggi

def volume_bola(jari_jari):
    return (4/3) * math.pi * jari_jari ** 3
