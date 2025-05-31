const express = require("express");
const router = express.Router();
const verifyFirebaseToken = require("../middleware/auth");
const { getQuestions } = require("../controllers/mcqController");

router.get("/:role", verifyFirebaseToken, getQuestions);

module.exports = router;