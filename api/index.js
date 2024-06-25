const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRouter = require("../routes/products");
const bagRouter = require("../routes/bags");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Express on Vercel"));

const url = process.env.MONGODB_URL;

mongoose
  .connect(url)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/product", productRouter);
app.use("/bag", bagRouter);

app.listen(port, () =>
  console.log("Server ready on port", port),
);

module.exports = app;
