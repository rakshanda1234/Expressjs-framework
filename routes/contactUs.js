const express = require("express");

const router = express.Router();

const contactUscontroller = require("../controllers/contactUs");

//  /contactUs =>GET
router.get("/contactUs", contactUscontroller.contactUscontroller);

//  /contactUs
router.post("/submit", contactUscontroller.postcontactUs);

module.exports = router;
