package src.app;

import javax.swing.*;

import src.misc.UI;

public class SimpleNoteApp {
    public static void main(String[] args) {

        JFrame frame = UI.createFrame();
        UI.createTextArea(frame);
        UI.createPanel(frame);

        frame.setVisible(true);
    }
}
