const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");

// Third-Party Middleware
app.use(expressLayouts);
app.use(morgan("dev"));

//Built in middleware
app.use(express.static("public"));

// Aplication Level Middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.get("/", (_req, res) => {
  const mahasiswa = [
    {
      nama: "Aqil",
      email: "aqil@gmail.com",
    },
    {
      nama: "Muhamad",
      email: "Muhamad@gmail.com",
    },
    {
      nama: "Maulana",
      email: "Maulana@gmail.com",
    },
  ];
  res.render("index", { layout: "layouts/main-layout", nama: "Muhamad Aqil Maulana", title: "Halaman Home", mahasiswa });
});

app.get("/about", (_req, res) => {
  res.render("about", { layout: "layouts/main-layout", title: "Halaman About" });
});

app.get("/contact", (_req, res) => {
  res.render("contact", { layout: "layouts/main-layout", title: "Halaman Contact" });
});

app.get("/product/:id/", (req, res) => {
  res.send(`Produk ID :  ${req.params.id} <br/> Category : ${req.query.category}`);
});

app.use("/", (_req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
