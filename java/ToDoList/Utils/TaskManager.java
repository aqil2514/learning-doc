package Utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class TaskManager {
    public static String showTasks() {
        File tasks = new File("./tasks.txt");

        if (!tasks.exists()) {
            return "File tidak ada";
        }

        StringBuilder result = new StringBuilder();

        try (Scanner fileScanner = new Scanner(tasks)) {
            if (!fileScanner.hasNextLine()) {
                return "Belum ada tugas yang disimpan";
            }

            System.out.println("------------------- TO DO LIST -------------------");
            while (fileScanner.hasNextLine()) {
                result.append(fileScanner.nextLine()).append("\n");
            }
        } catch (FileNotFoundException e) {
            return "Terjadi kesalahan: " + e.getMessage();
        }

        return result.toString();
    }

    public static void addTasks(Scanner scanner) {
        String tasks = showTasks();

        System.out.println(tasks);
        System.out.println("Masukkan tugas baru (ketik 'exit' untuk kembali ke menu utama):");

        int taskNumber = countTaks(tasks) + 1;

        while (true) {
            String newTask = scanner.nextLine();

            if (newTask.equalsIgnoreCase("exit")) {
                System.out.println("Kembali ke menu utama...");
                break;
            }

            try (FileWriter myWriter = new FileWriter("tasks.txt", true)) { // Mode append
                myWriter.write(taskNumber + ". " + newTask + "\n");
                System.out.println("Tugas berhasil ditambahkan!");
                taskNumber++;
            } catch (IOException e) {
                System.out.println("Terjadi kesalahan saat menulis file.");
                e.printStackTrace();
            }
        }
    }

    // Ini sebenarnya bisa direfactoring, tapi karena fokus saya belajar, saya
    // sengaja tidak refactoring ini
    public static void editTasks(Scanner scanner) {
        String tasks = showTasks();

        if (tasks.contains("Belum ada tugas yang disimpan")) {
            System.out.println("Tugas belum ada. Tidak ada yang bisa diedit");
            System.out.println("Tekan [Enter] untuk kembali ke menu");
            scanner.nextLine();
            return;

        }

        System.out.println(tasks);
        System.out.println("Cukup masukkan nomor tugas");
        System.out.println("Tugas mana yang mau diedit?");

        String[] splittedTasks = tasks.split("\n");
        int taskIndex = scanner.nextInt() - 1;
        scanner.nextLine();

        try {
            boolean isInvalid = taskIndex < 0 || taskIndex >= splittedTasks.length;

            if (isInvalid) {
                System.out.println("Nomor tidak valid. Tekan [Enter] untuk kembali ke menu");
                scanner.nextLine();
                return;
            }

        } catch (Exception e) {
            System.out.println("Pilihan tidak valid! Harap masukkan angka");
        }

        String oldTask = splittedTasks[taskIndex];

        System.out.println("Tugas yang dipilih : ");
        System.out.println(oldTask);
        System.out.println("Ingin diganti jadi apa?");

        String newTaskInput = scanner.nextLine();

        String newTask = splittedTasks[taskIndex] = (taskIndex + 1) + ". " + newTaskInput;

        System.out.println("Konfirmasi Terakhir.");
        System.out.println("Tugas Lama : " + oldTask);
        System.out.println("Tugas Baru : " + newTask);
        System.out.println("Anda yakin? (Y/n)");

        String confirmation = scanner.nextLine();

        if (confirmation.equalsIgnoreCase("y") || confirmation.isEmpty()) {
            try (FileWriter writer = new FileWriter("./tasks.txt")) {
                for (String task : splittedTasks) {
                    writer.write(task + "\n");
                }
                System.out.println("Perubahan dikonfirmasi");
            } catch (Exception e) {
                System.out.println("Terjadi kesalahan saat menyimpan tugas");
            }
        } else {
            System.out.println("Perubahan dibatalkan");
        }
        System.out.println("Tekan [Enter] untuk kembali ke menu...");
        scanner.nextLine();

        return;
    }

    public static void deleteTask(Scanner scanner) {
        String tasks = showTasks();

        if (tasks.contains("Belum ada tugas yang disimpan")) {
            System.out.println("Tidak ada tugas yang bisa dihapus.");
            System.out.println("Tekan [Enter] untuk kembali ke menu...");
            scanner.nextLine();
            return;
        }

        System.out.println(tasks);
        System.out.println("Cukup masukkan nomor tugas");
        System.out.println("Tugas mana yang mau dihapus?");

        String[] splittedTasks = tasks.split("\n");
        int taskIndex = scanner.nextInt() - 1;
        scanner.nextLine();

        // Validasi input
        if (taskIndex < 0 || taskIndex >= splittedTasks.length) {
            System.out.println("Nomor tidak valid. Tekan [Enter] untuk kembali ke menu.");
            scanner.nextLine();
            return;
        }

        String selectedTask = splittedTasks[taskIndex];
        System.out.println("Konfirmasi Terakhir.");
        System.out.println("Tugas '" + selectedTask + "' akan dihapus.");
        System.out.println("Yakin? (Y/n)");

        String confirmation = scanner.nextLine();

        if (confirmation.equalsIgnoreCase("y") || confirmation.isEmpty()) {
            // Buat daftar baru tanpa tugas yang dihapus
            String[] updatedTasks = new String[splittedTasks.length - 1];
            int newIndex = 0;
            for (int i = 0; i < splittedTasks.length; i++) {
                if (i != taskIndex) {
                    // Perbarui nomor tugas secara otomatis
                    updatedTasks[newIndex] = (newIndex + 1) + ". "
                            + splittedTasks[i].substring(splittedTasks[i].indexOf(" ") + 1);
                    newIndex++;
                }
            }

            saveTasksToFile(updatedTasks);
            System.out.println("Tugas berhasil dihapus dan daftar diperbarui.");
        } else {
            System.out.println("Penghapusan dibatalkan.");
        }

        System.out.println("Tekan [Enter] untuk kembali ke menu...");
        scanner.nextLine();
    }

    // Fungsi untuk menyimpan tugas ke file
    private static void saveTasksToFile(String[] tasks) {
        try (FileWriter writer = new FileWriter("./tasks.txt")) {
            for (String task : tasks) {
                writer.write(task + "\n");
            }
        } catch (Exception e) {
            System.out.println("Terjadi kesalahan saat menyimpan tugas.");
        }
    }

    private static int countTaks(String tasks) {
        if (tasks.contains("Belum ada tugas yang disimpan") || tasks.contains("File tidak ada")) {
            return 0;
        }

        String[] lines = tasks.split("\n");
        return lines.length;
    }

}
