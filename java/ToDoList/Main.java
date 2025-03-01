import java.util.Scanner;

import Utils.TaskManager;

public class Main {
    public static void main(String[] args) {
        Scanner mainMenu = new Scanner(System.in);
        while (true) {
            mainMenu();

            String choice = mainMenu.nextLine();

            switch (choice) {
                case "1":
                    System.out.println(TaskManager.showTasks());
                    goToMenu();
                    break;
                case "2":
                    TaskManager.addTasks(mainMenu);
                    break;
                case "3":
                    TaskManager.editTasks(mainMenu);
                    break;
                case "4":
                    TaskManager.deleteTask(mainMenu);
                    break;
                case "5":
                    System.out.println("Terimakasih telah menggunakan ini...");
                    mainMenu.close();
                    System.exit(0);
                    return;
                default:
                    System.out.println("Pilihan tidak ada di dalam sistem...");
                    break;
            }
        }

    }

    private static void mainMenu() {

        System.out.println("Simple To Do List");
        System.out.println("Main Menu : ");
        System.out.println("1. Lihat Tugas");
        System.out.println("2. Tambah Tugas");
        System.out.println("3. Edit Tugas");
        System.out.println("4. Hapus Tugas");
        System.out.println("5. Keluar");
        System.out.println("Pilih salah satu !");
    }

    private static void goToMenu() {
        System.out.println("Tekan [Enter] untuk kembali ke menu");
        System.console().readLine();
    }
}