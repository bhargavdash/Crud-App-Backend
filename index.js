const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//ROUTES
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello from node API server");
});


mongoose
  .connect(
    "mongodb+srv://bhargavdash:VipFIHVGUKdWuNKp@backenddb.pg342gx.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
