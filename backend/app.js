const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const pgp = require("pg-promise")(/* options */);
const db = pgp("postgres://ashish:password@localhost:5432/ciao");

//Router Imports
const userRouter = require("./routes/user");
const registerRouter = require("./routes/register");
const storeRouter = require("./routes/store");
const categoryRouter = require("./routes/category");
const productRouter = require("./routes/product");

//Middleware
app.use(express.json()); //Body-Parser accepts only JSON

//Authentication Configuration

//Routes
app.use("/user", userRouter);
app.use("/register", registerRouter);
app.use("/store", storeRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);

// //Database Connection
//Postgress
db.one("SELECT $1 AS value", 123)
  .then((data) => {
    console.log("DATA:", data.value);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });

// mongoose.connect(process.env.DB_CONNECTION,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => {
//         console.log('Database Connected');
//     })

//Server Setting
app.listen(process.env.PORT, () => console.log("Server up and Running"));
