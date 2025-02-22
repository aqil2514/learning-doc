class ToDoList:
    def __init__(self):
        self.task = []
    
    def add_task(self, task):
        self.task.append({"Aktivitas": task})
    
    def show_task(self):
        if len(self.task) == 0:
            print("Belum tambah tugas")
        else:
            for index, task in enumerate(self.task):
                print(f"{index + 1}. {task['Aktivitas']}")

    def delete_task(self, index):
        if type(index) != "str":
            print("Jawaban harus angka")
        if 0 <= index < len(self.task):
            del self.task[index]
        else:
            print("Tidak ada data tersebut")

