const express = require("express");
const path = require("path");
const contacUsController = require("../controllers/contactus");
const router = express.Router();

router.get("/success", contacUsController.sucessMessage);

module.exports = router;
