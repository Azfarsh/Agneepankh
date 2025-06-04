const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mcqRoutes = require("./routes/mcqRoutes");
const answerRoutes = require("./routes/answerRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/mcq", mcqRoutes);
app.use("/api/answers", answerRoutes);
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));