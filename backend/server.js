/* eslint-env node */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import spotifyRoutes from "./routes/spotify.js";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env BEFORE anything else
dotenv.config({ path: path.join(__dirname, ".env") });

// Debug (you can remove later)
console.log("CLIENT ID:", process.env.SPOTIFY_CLIENT_ID);

const app = express();
app.use(cors());
app.use(express.json());

// Register Spotify routes
app.use("/auth/spotify", spotifyRoutes);

app.get("/", (req, res) => {
  res.send("TUNED Backend Running 🎧");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
