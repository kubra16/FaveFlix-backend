const asyncHandler = require("express-async-handler");
const playlist = require("../models/PlaylistModal");

const createPlaylist = asyncHandler(async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const newList = new playlist({
      name: req.body.name,
      user: req.user._id,
      movies: [],
      isPublic: req.body.isPublic,
    });
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const getAllPlaylist = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId;
    const playlists = await playlist.find({ user: userId });
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const getplayListById = asyncHandler(async (req, res) => {
  try {
    const publicPlaylist = await playlist.findOne({
      _id: req.params.playlistId,
    });
    if (!publicPlaylist) {
      return res.status(404).json({ message: "Playlist not found" });
    }
    res.status(200).json(publicPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const addMovies = asyncHandler(async (req, res) => {
  try {
    const list = await playlist.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    const newMovie = {
      imdbID: req.body.imdbID,
      title: req.body.title,
      year: req.body.year,
      poster: req.body.poster,
    };
    list.movies.push(newMovie);
    await list.save();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const addplayListPublic = asyncHandler(async (req, res) => {
  try {
    const list = await playlist.findById(req.params.id);

    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    list.isPublic = true;
    await list.save();
    return res.status(200).json({ message: "Playlist marked as public" });
  } catch (error) {
    console.error("Error marking playlist as public:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const addplayListPrivate = asyncHandler(async (req, res) => {
  try {
    const list = await playlist.findById(req.params.id);

    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    list.isPublic = false;
    await list.save();
    return res.status(200).json({ message: "Playlist marked as private" });
  } catch (error) {
    console.error("Error marking playlist as private:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const deletePlaylist = asyncHandler(async (req, res) => {
  try {
    const list = await playlist.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: "Playlist not found" });
    }
    await playlist.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Playlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  createPlaylist,
  getplayListById,
  getAllPlaylist,
  addMovies,
  deletePlaylist,
  addplayListPublic,
  addplayListPrivate,
};
