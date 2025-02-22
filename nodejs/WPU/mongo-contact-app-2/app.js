const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const { body, validationResult, check } = require("express-validator");
const methodOverride = require("method-override");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

app.use(bodyParser.urlencoded({ extended: true }));

require("./utils/db");
const Contact = require("./model/contact");

// Setup method override
app.use(methodOverride("_method"));

//Setup EJS
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

// Konfigurasi Flash
app.use(expressLayouts);
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Halaman Home
app.get("/", (_req, res) => {
  res.render("index", { layout: "layouts/main-layout", nama: "Muhamad Aqil Maulana", title: "Halaman Home" });
});

// Halaman About
app.get("/about", (_req, res) => {
  res.render("about", { layout: "layouts/main-layout", title: "Halaman About" });
});

// Halaman Contact
app.get("/contact", async (req, res) => {
  //   Contact.find().then((con) => res.send(con));

  const contacts = await Contact.find();
  res.render("contact", { layout: "layouts/main-layout", title: "Halaman Contact", contacts, msg: req.flash("msg") });
});

// Halaman form tambah data contact

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form Tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

// Proses Tambah Data Contact
app.post(
  "/contact",
  [
    body("nama").custom(async (value) => {
      const duplikat = await Contact.findOne({ nama: value });

      if (duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }

      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("noHP", "No HP Tidak Valid").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add-contact", {
        title: "Form Tambah Data Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
      });
    } else {
      Contact.insertMany(req.body, (err, result) => {
        //Kirimkan flash message
        req.flash("msg", "Data contact berhasil ditambahkan!");
        res.redirect("/contact");
      });
    }
  }
);

app.delete("/contact", (req, res) => {
  Contact.deleteOne({ nama: req.body.nama }).then((_result) => {
    req.flash("msg", "Data contact berhasil dihapus!");
    res.redirect("/contact");
  });
});

//Form ubah data contact
app.get("/contact/edit/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });

  res.render("edit-contact", {
    title: "Form Ubah Data Contact",
    layout: "layouts/main-layout",
    contact,
  });
});

//Proses ubah data
app.put(
  "/contact",
  [
    body("nama").custom(async (value, { req }) => {
      const duplikat = await Contact.findOne({ nama: value });
      if (value !== req.body.oldNama && duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }

      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("noHP", "No HP Tidak Valid").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("edit-contact", {
        title: "Form Ubah Data Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact: req.body,
      });
    } else {
      Contact.updateOne(
        { _id: req.body._id },
        {
          $set: {
            nama: req.body.nama,
            email: req.body.email,
            noHP: req.body.noHP,
          },
        }
      ).then((result) => {
        //Kirimkan flash message
        req.flash("msg", "Data contact berhasil diubah!");
        res.redirect("/contact");
      });
    }
  }
);

//Halaman detail contact
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("detail", { layout: "layouts/main-layout", title: "Halaman Detail", contact });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
