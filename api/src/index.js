const express = require("express");
const crypto = require("crypto");
const faker = require("faker");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const movies = Array.from(Array(50), () => ({
  id: crypto.randomBytes(8).toString("hex"),
  title: faker.name.title(),
  description: faker.name.jobDescriptor(),
}));

app.get("/movies", (_, res) => {
  res.send(movies);
});

app.listen(4000, () => console.log("⭐ server is listening on: 4000!"));
