const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

require("./utils/db");
const Contact = require("./model/contact");

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

//Halaman detail contact
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("detail", { layout: "layouts/main-layout", title: "Halaman Detail", contact });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
