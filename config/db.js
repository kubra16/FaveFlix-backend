const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conection = await mongoose.connect(process.env.BASE_URL, {
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(`Error : ${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
