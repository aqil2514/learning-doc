// Mengambil argument dari command line
const yargs = require("yargs");
const { simpanKontak, listContact, detailContact, deleteContact } = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanKontak(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

//Menampilkan daftar semua nama kontak
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler() {
    listContact();
  },
});

//Menampilkan detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

//Menghapus kontak
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();
