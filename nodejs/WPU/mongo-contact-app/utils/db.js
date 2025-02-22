const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/belajarnode", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Menambah 1 Data
// const contact1 = new Contact({
//   nama: "Aqil",
//   noHP: "0817797777",
//   email: "aqil@gmail.com",
// });

// // Simpan ke Collection
// contact1.save().then((res) => console.log(res));
