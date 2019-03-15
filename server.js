const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

// config midleware
app.use(express.static("./build"));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile("./build/index.html");
});
// Home page
app.get("/api/home", (req, res) => {
  res.json({ title: "Home" });
});
// about page
app.get("/api/about", (req, res) => {
  res.json({ title: "About" });
});

app.listen(PORT, () => console.log("service on port 3001"));
