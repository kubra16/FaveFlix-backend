const express = require("express");
const {
  createPlaylist,
  getAllPlaylist,
  getplayListById,
  addMovies,
  removeMovies,
} = require("../Controllers/playlistControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, createPlaylist);
router.route("/:userId").get(protect, getAllPlaylist);

router.get("/public/:playlistId", getplayListById);
router.post("/:id/movies", addMovies);
router.delete("/:id/movies/:movieId", removeMovies);

module.exports = router;
