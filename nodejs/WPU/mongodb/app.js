const { MongoClient, ObjectId } = require("mongodb");

const uri = `mongodb://127.0.0.1:27017`;
const dbName = "belajarmongo";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(uri, options);

client.connect((err, client) => {
  if (err) {
    return console.log("Koneksi gagal");
  }

  //Pilih database
  const db = client.db(dbName);

  // Menambahkan 1 data ke Collection Mahasiswa
  //   db.collection("mahasiswa").insertOne(
  //     {
  //       nama: "Aji",
  //       email: "aji@gmail.com",
  //     },
  //     (err, res) => {
  //       if (err) {
  //         return console.log("Gagal Ditambahkan!");
  //       }

  //       console.log(res);
  //     }
  //   );

  //Menambahkan lebih dari 1 data
  //   db.collection("mahasiswa").insertMany(
  //     [
  //       {
  //         nama: "aji",
  //         email: "aji@gmail.com",
  //       },
  //       {
  //         nama: "hanum",
  //         email: "hanum@gmail.com",
  //       },
  //     ],
  //     (err, res) => {
  //       if (err) {
  //         console.log(err);
  //       }

  //       console.log(res);
  //     }
  //   );

  //Menampilkan semua data
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find()
  //       .toArray((err, res) => {
  //         console.log(res);
  //       })
  //   );

  //Menampilkan semua data berdasarkan kriteria
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find({ _id: ObjectId("6548f2da7097e10c9018f27e") })
  //       .toArray((err, res) => {
  //         console.log(res);
  //       })
  //   );

  //Mengubah data berdasarkan id
  db.collection('mahasiswa').updateOne({_id: ObjectId("6548f2da7097e10c9018f27e")},{

      $set: {
        nama:"Aqil"
      })
  }
});
