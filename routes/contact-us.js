const express = require("express");
const path = require("path");
const contacUsController = require("../controllers/contactus");
const router = express.Router();

// /admin/contact-us => GET
router.get("/contact-us", contacUsController.getAddContactUs);

// /admin/contact-us => POST
router.post("/contact-us", contacUsController.postAddContactUs);

module.exports = router;
