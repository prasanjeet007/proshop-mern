import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONG_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database is not connected");
    process.exit(1);
  }
};
export default connectDB;
