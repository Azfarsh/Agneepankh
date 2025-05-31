const express = require("express");
const router = express.Router();
const verifyFirebaseToken = require("../middleware/auth");
const { saveAnswers } = require("../controllers/answerController");

router.post("/", verifyFirebaseToken, saveAnswers);

module.exports = router;