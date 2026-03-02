/* eslint-env node */
import express from "express";
import axios from "axios";
import querystring from "querystring";
import { Buffer } from "buffer";

const router = express.Router();

// Step 1: Spotify Login Route
router.get("/login", (req, res) => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const redirect_uri = process.env.REDIRECT_URI;

  console.log("LOGIN CLIENT ID:", client_id); // debug

  if (!client_id || !redirect_uri) {
    return res.status(500).send("Missing Spotify environment variables");
  }

  const scope = "user-top-read user-read-recently-played";

  const queryParams = querystring.stringify({
    response_type: "code",
    client_id,
    scope,
    redirect_uri,
  });

  res.redirect(
    `https://accounts.spotify.com/authorize?${queryParams}`
  );
});

// Step 2: Callback Route (After Spotify Login)
router.get("/callback", async (req, res) => {
  const code = req.query.code;

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirect_uri = process.env.REDIRECT_URI;

  if (!code) {
    return res.status(400).send("No code provided by Spotify");
  }

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
        },
      }
    );

    const access_token = tokenResponse.data.access_token;

    // Fetch Top Artists (for your Tuned dashboard)
    const topArtistsResponse = await axios.get(
      "https://api.spotify.com/v1/me/top/artists?limit=5",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const artists = topArtistsResponse.data.items.map((artist) => ({
      name: artist.name,
      image: artist.images?.[0]?.url || null,
      popularity: artist.popularity,
    }));

    res.json({
      message: "Spotify Connected Successfully 🎧",
      topArtists: artists,
    });
  } catch (error) {
    console.error(
      "Spotify Error:",
      error.response?.data || error.message
    );
    res.status(500).send("Spotify Authentication Failed");
  }
});

export default router;