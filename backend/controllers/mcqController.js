const pool = require("../db");

exports.getQuestions = async (req, res) => {
  const { role } = req.params;
  try {
    const result = await pool.query(
      "SELECT id, question, option_a, option_b, option_c, option_d FROM mcq_questions WHERE role = $1",
      [role]
    );
    res.json({ questions: result.rows });
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
};