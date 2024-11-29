const express = require("express");
const cors = require("cors");
const path = require("path");
const { evaluateChecklist } = require("./controllers/checklistController");

const app = express();

// Middleware to handle CORS
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "../public")));

// API Route
app.get("/api/checklist", evaluateChecklist);

// Serve the index.html file for any other route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
