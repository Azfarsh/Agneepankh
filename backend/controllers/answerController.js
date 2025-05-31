const pool = require("../db");

exports.saveAnswers = async (req, res) => {
  const { role, answers } = req.body;
  const { uid, email } = req.user;
  try {
    await pool.query(
      "INSERT INTO user_answers (uid, email, role, answers) VALUES ($1, $2, $3, $4)",
      [uid, email, role, JSON.stringify(answers)]
    );
    res.json({ message: "Answers saved!" });
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
};