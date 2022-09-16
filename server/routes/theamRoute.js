const express = require("express");
const router = new express.Router();
const { upload, createTheame, findAllTheams, deleteTheams } = require("../controller/theamControler");


router.post("/createTheame", upload.single("image"), createTheame);
router.get("/findAllTheam", findAllTheams);
router.get("/deleteTheam/:id", deleteTheams);

module.exports = router;
