const express = require("express");
const router = new express.Router();
const { upload, createTheame, findAllTheams } = require("../controller/theamControler");

// Theame Create Api Here
// , upload.single("image")
router.post("/createTheame", upload.single("image"), createTheame);
router.get("/findAllTheam", findAllTheams);

module.exports = router;
