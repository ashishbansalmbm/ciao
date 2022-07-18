const express = require("express");
const app = express();
const config = require("config");
const Pool = require("pg-pool");

const PORT = config.get("SERVER.PORT") || 3200;
let pool = new Pool(config.get("PG"));

//Router Imports
const userRouter = require("./routes/user");

//Middleware
app.use(express.json()); //Body-Parser accepts only JSON

//Routes
app.use("/user", userRouter);

//Database Connection
(async () => {
  let time = await pool.query("SELECT NOW()");
  console.log("PG Connected at", time.rows[0].now);
})().catch((e) => console.error(e.message, e.stack));

//Server Setting
app.listen(PORT, () => console.log("Server up and Running on", PORT));
