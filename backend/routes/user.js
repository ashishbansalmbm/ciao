const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", async (req, res) => {
  console.log("user route");
  res.send({ message: "hi there user" });
});
module.exports = router;
