import { sum } from "./functions";

test("Fungsi sum harus sudah benar", () => {
    expect(sum(1, 2)).toBe(3);  // Tes dasar, 1 + 2 harus 3
});

test("0 + 0 = 0", () => {
  expect(sum(0, 0)).toBe(0);  // Kasus ketika kedua angka adalah 0
});

test("Negatif dan postif harus benar", () => {
  expect(sum(-1, 2)).toBe(1);  // Tes dengan angka negatif
});

test("Positif dan negatif harus benar", () => {
  expect(sum(5, -3)).toBe(2);  // Kasus lain dengan angka negatif
});

test("Angka besar", () => {
  expect(sum(1000000, 2000000)).toBe(3000000);  // Tes dengan angka besar
});

test("Angka decimal", () => {
  expect(sum(1.5, 2.5)).toBe(4);  // Tes dengan angka desimal
});

test("Penjumlahan ketika string", () => {
  expect(sum("2", "3")).toBe(5);  // Tes ketika angka diteruskan sebagai string
});

test("Penjumlahan dengan nilai undefined", () => {
  expect(sum(1, undefined)).toBeNaN();  // Kasus ketika salah satu argumen tidak terdefinisi
});

test("Penjumlahan jika kasus null", () => {
  expect(sum(1, null)).toBe(1);  // Kasus dengan nilai null
});
