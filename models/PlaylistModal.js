const mongoose = require("mongoose");

const playListschema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  movies: [
    {
      imdbID: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
      poster: {
        type: String,
        required: true,
      },
    },
  ],
  isPublic: {
    type: Boolean,
    default: false,
  },
});

const playlist = mongoose.model("playlist", playListschema);

module.exports = playlist;
