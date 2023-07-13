const express = require("express");
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contact1Controller")
const validateToken = require("../middleware/validateTokenHandler")

router.use(validateToken);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);
router.route('/').get(getContacts).post(createContact);


module.exports = router;