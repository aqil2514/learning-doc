import datetime
import json

class ToDoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task, priority=1):
        self.tasks.append({"task": task, "date_created": str(datetime.datetime.now()), "priority": priority, "completed": False})

    def remove_task(self, index):
        if 0 <= index < len(self.tasks):
            del self.tasks[index]
        else:
            print("Index out of range!")

    def complete_task(self, index):
        if 0 <= index < len(self.tasks):
            self.tasks[index]["completed"] = True
        else:
            print("Index out of range!")

    def show_tasks(self):
        for index, task in enumerate(self.tasks):
            status = "Completed" if task["completed"] else "Pending"
            print(f"{index+1}. {task['task']} (Priority: {task['priority']}, Status: {status}, Created: {task['date_created']})")

    def save_to_file(self, filename):
        with open(filename, 'w') as file:
            json.dump(self.tasks, file, indent=4)

    def load_from_file(self, filename):
        try:
            with open(filename, 'r') as file:
                self.tasks = json.load(file)
        except FileNotFoundError:
            print(f"File '{filename}' not found!")

if __name__ == "__main__":
    tdl = ToDoList()

    # Menambahkan beberapa tugas
    tdl.add_task("Belajar Python", priority=2)
    tdl.add_task("Olahraga")
    tdl.add_task("Belanja bahan makanan", priority=3)

    # Menampilkan daftar tugas
    print("Daftar Tugas Awal:")
    tdl.show_tasks()

    # Menandai tugas yang telah selesai
    tdl.complete_task(1)

    # Menampilkan daftar tugas setelah penyelesaian
    print("\nDaftar Tugas Setelah Penyelesaian:")
    tdl.show_tasks()

    # Menyimpan daftar tugas ke file JSON
    tdl.save_to_file("tasks.json")

    # Menghapus tugas kedua
    tdl.remove_task(1)

    # Menampilkan daftar tugas terbaru
    print("\nDaftar Tugas Terbaru:")
    tdl.show_tasks()

    # Memuat daftar tugas dari file JSON
    tdl.load_from_file("tasks.json")

    # Menampilkan daftar tugas setelah dimuat dari file
    print("\nDaftar Tugas Setelah Dimuat dari File:")
    tdl.show_tasks()
