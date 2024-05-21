const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const playlistRoutes = require("./routes/playlistRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

// Use the user routes
app.use("/api/users", userRoutes);
app.use("/api/playlist", playlistRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
