import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.DB_URL;
    console.log(url);
    await mongoose.connect(url);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
