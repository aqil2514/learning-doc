package src.misc;

import java.awt.BorderLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

public class UI {
    public static JFrame createFrame() {
        JFrame frame = new JFrame("Aplikasi Catatan Sederhana");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        return frame;
    }

    public static JTextArea createTextArea(JFrame frame) {
        JTextArea textArea = new JTextArea();
        frame.add(new JScrollPane(textArea));
        return textArea;
    }

    public static JPanel createPanel(JFrame frame) {
        JPanel panel = new JPanel();
        JButton saveButton = new JButton("Simpan");
        JButton openButton = new JButton("Buka");

        panel.add(saveButton);
        panel.add(openButton);
        frame.add(panel, BorderLayout.SOUTH);

        return panel;
    }
}
