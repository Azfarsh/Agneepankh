const pool = require("../db");

exports.saveFeedback = async (req, res) => {
  const { name, feedback } = req.body;
  const { uid, email } = req.user; 
  try {
    await pool.query(
      "INSERT INTO feedback (uid, email, name, feedback) VALUES ($1, $2, $3, $4)",
      [uid, email, name, feedback]
    );
    res.json({ message: "Feedback saved!" });
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
}