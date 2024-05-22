const express = require("express");
const {
  createPlaylist,
  getAllPlaylist,
  getplayListById,
  addMovies,
  addplayListPublic,
  deletePlaylist,
  addplayListPrivate,
} = require("../Controllers/playlistControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, createPlaylist);
router.route("/:userId").get(protect, getAllPlaylist);

router.get("/public/:playlistId", getplayListById);
router.route("/:id/public").put(protect, addplayListPublic);
router.route("/:id/private").put(protect, addplayListPrivate);
router.post("/:id/movies", addMovies);
router.route("/:id/delete").delete(protect, deletePlaylist);

module.exports = router;
