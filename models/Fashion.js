import mongoose from "mongoose";

const fashionSchema = new mongoose.Schema({
  city: String,
  type: String,
  color: String,
  material: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Fashion", fashionSchema);