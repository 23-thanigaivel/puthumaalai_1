const express = require("express");
const app = express();

const cookieParser = require('cookie-parser')
const products = require("./routes/products");
const auth = require("./routes/auth");
const order = require("./routes/order");


app.use(express.json());
app.use(cookieParser());


app.use("/api", products);
app.use("/api", auth);
app.use("/api", order);

app.use(require('./middleware/error'));

module.exports = app;
