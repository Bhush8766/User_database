const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://bhush8766:Bhush%402328%40@cluster0.yawkujz.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0");
    console.log("✅ MongoDB connected via Mongoose!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
