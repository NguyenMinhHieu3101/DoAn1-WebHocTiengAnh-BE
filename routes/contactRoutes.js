const express = require("express");
const { contact } = require("../controllers/contact1Controller");

const router = express.Router();

router.get("/contact", contact)

module.exports = router;