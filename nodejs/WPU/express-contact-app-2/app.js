const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact, addContact, cekDuplikat } = require("./views/utils/contact");
const bodyParser = require("body-parser");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");

// Third-Party Middleware
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

//Built in middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.render("index", { layout: "layouts/main-layout", nama: "Muhamad Aqil Maulana", title: "Halaman Home" });
});

app.get("/about", (_req, res) => {
  res.render("about", { layout: "layouts/main-layout", title: "Halaman About" });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", { layout: "layouts/main-layout", title: "Halaman Contact", contacts, msg: req.flash("msg") });
});

//Halaman form tambah data contact

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form Tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

//Proses data contact
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);

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
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        title: "Form Tambah Data Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      //Kirimkan flash message
      req.flash("msg", "Data contact berhasil ditambahkan!");
      res.redirect("/contact");
    }
  }
);

//Halaman detail contact
app.get("/contact/nama/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", { layout: "layouts/main-layout", title: "Halaman Detail", contact });
});

app.use((_req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
