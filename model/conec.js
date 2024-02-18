const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect to MongoDB...");
    await mongoose.connect(
      "mongodb+srv://tranthaihoc:123@cluster0.huizmum.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected Successfully");
  } catch (error) {
    console.error("Database connection Failed", error);
    process.exit(1);
  }
};

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", loginSchema);

module.exports = {
  connectDB,
  UserModel,
};
