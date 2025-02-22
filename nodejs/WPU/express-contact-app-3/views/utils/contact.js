const fs = require("fs");

// Membuat file data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

//Ambil semua data dlam kontak

const loadContact = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

//Cari data dalam kontak
const findContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

  return contact;
};

//Menimpa / Menulis file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

// Cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama);
};

//Menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

//Hapus kontak
const deleteContact = (nama) => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);

  saveContacts(filteredContacts);
};

//Ubah Kontak
const updateContacts = (contactBaru) => {
  const contacts = loadContact();
  const contactIndex = contacts.findIndex((contact) => contact.nama === contactBaru.oldNama);

  if (contactIndex !== -1) {
    // Ganti kontak lama dengan kontak baru
    contacts[contactIndex] = contactBaru;
    delete contactBaru.oldNama;
    saveContacts(contacts);
  }
};

module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts };
