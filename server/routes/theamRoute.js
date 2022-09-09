const express = require("express");
const router = new express.Router();
const { upload, createTheame } = require("../controller/theamControler");

// Theame Create Api Here
// , upload.single("image")
// router.get("/createTheame", createTheame);



router.get("/", (req, res) => {
  res.send('Hi I AM Shashikant');
});

module.exports = router;
