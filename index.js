import express from "express";
import cors from "cors";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.post('/mapbox-token', (req, res) => {
    res.json({ token: process.env.MAPBOX_ACCESS_TOKEN });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
