const express = require("express");
const router = express.Router();
const verifyFirebaseToken = require("../middleware/auth");
const { saveFeedback } = require("../controllers/feedbackController");

router.post("/", verifyFirebaseToken, saveFeedback);

module.exports = router;