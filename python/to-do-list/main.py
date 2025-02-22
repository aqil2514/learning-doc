import os
from utils import ToDoList

tdl1 = ToDoList()

def clear():
    os.system("clear")

while True:
    clear()
    print("To Do List by Muhamad Aqil Maulana")
    print("1. Tambah list")
    print("2. Lihat list")
    print("3. Hapus list")
    print("0. Keluar")
    print("Pilih salah satu")

    choice1= input("Pilihan kamu : ")

    if choice1 == "1":
        while True:
            clear()
            data = input("Masukan list : ")
            tdl1.add_task(data)

            clear()
            print(f"{data} berhasil ditambah ke to do list")
            again = input("Ingin tambah lagi? (y/n)")
            if again != 'y':
                break

    elif choice1 == "2":
        clear()
        tdl1.show_task()
        input("Tekan apapun untuk ke menu utama...")

    elif choice1 == "3":
        clear()
        tdl1.show_task()

        print(".")
        data = input("Hapus data nomor : ")
        
        if not int(data.isdigit()):
            print("Pilihan harus berupa angka...")
            input()
        else:
            tdl1.delete_task(int(data))
            input(f"Data nomor {data} berhasil dihapus...")
        
    elif choice1 == "0":
        clear()
        print("Terimakasih telah menggunakan aplikasi sederhana ini")
        break
    else:
        print("Tidak ada pilihan tersebut")
