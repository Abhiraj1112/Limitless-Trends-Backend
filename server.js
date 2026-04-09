import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import fashionRoutes from "./routes/fashionRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

/* 🔥 DUMMY DATA (ADD HERE) */
const fashionData = [
  {
    city: "Jaipur",
    products: [
      ...Array(8).fill({ type: "Kurta", color: "Saffron", size: "L", fitting: "Slim", material: "Cotton" }),
      { type: "Lehenga", color: "Maroon", size: "S", fitting: "Regular", material: "Silk" },
      { type: "Lehenga", color: "Maroon", size: "M", fitting: "Regular", material: "Silk" },
      { type: "Anarkali", color: "Red", size: "M", fitting: "Flared", material: "Georgette" },
      { type: "Anarkali", color: "Pink", size: "L", fitting: "Flared", material: "Georgette" },
      { type: "Kurti", color: "Yellow", size: "M", fitting: "Slim", material: "Cotton" },
      { type: "Kurti", color: "Yellow", size: "L", fitting: "Slim", material: "Cotton" },
      { type: "Dupatta", color: "Pink", size: "Free", fitting: "Loose", material: "Chiffon" },
      { type: "Tunic", color: "Indigo", size: "M", fitting: "Regular", material: "Silk" }
    ]
  },
  {
    city: "Mumbai",
    products: [
      ...Array(9).fill({ type: "Dress", color: "Red", size: "S", fitting: "Slim", material: "Satin" }),
      { type: "Jeans", color: "Blue", size: "L", fitting: "Slim", material: "Denim" },
      { type: "Jeans", color: "Black", size: "M", fitting: "Slim", material: "Denim" },
      { type: "Shirt", color: "White", size: "XL", fitting: "Relaxed", material: "Linen" },
      { type: "Shirt", color: "Sky Blue", size: "L", fitting: "Relaxed", material: "Linen" },
      { type: "T-shirt", color: "Grey", size: "M", fitting: "Regular", material: "Cotton" },
      { type: "T-shirt", color: "Black", size: "L", fitting: "Regular", material: "Cotton" },
      { type: "Blazer", color: "Navy", size: "L", fitting: "Slim", material: "Polyester" }
    ]
  },
  {
    city: "Delhi",
    products: [
      ...Array(10).fill({ type: "Jacket", color: "Brown", size: "M", fitting: "Regular", material: "Leather" }),
      { type: "Sweater", color: "Grey", size: "L", fitting: "Relaxed", material: "Wool" },
      { type: "Sweater", color: "White", size: "M", fitting: "Relaxed", material: "Wool" },
      { type: "Hoodie", color: "Black", size: "M", fitting: "Loose", material: "Fleece" },
      { type: "Hoodie", color: "Blue", size: "L", fitting: "Loose", material: "Fleece" },
      { type: "Coat", color: "Beige", size: "XL", fitting: "Regular", material: "Wool" },
      { type: "Blazer", color: "Navy", size: "L", fitting: "Slim", material: "Polyester" },
      { type: "Sweatshirt", color: "White", size: "S", fitting: "Loose", material: "Cotton" }
    ]
  },
  {
    city: "Bangalore",
    products: [
      ...Array(8).fill({ type: "T-shirt", color: "Black", size: "M", fitting: "Regular", material: "Cotton" }),
      { type: "Jeans", color: "Blue", size: "L", fitting: "Slim", material: "Denim" },
      { type: "Jeans", color: "Grey", size: "M", fitting: "Slim", material: "Denim" },
      { type: "Shirt", color: "White", size: "L", fitting: "Regular", material: "Linen" },
      { type: "Shirt", color: "Green", size: "M", fitting: "Regular", material: "Linen" },
      { type: "Hoodie", color: "Grey", size: "L", fitting: "Loose", material: "Fleece" },
      { type: "Jacket", color: "Black", size: "M", fitting: "Regular", material: "Leather" },
      { type: "Shorts", color: "Blue", size: "M", fitting: "Regular", material: "Cotton" }
    ]
  },
  {
    city: "Kolkata",
    products: [
      ...Array(9).fill({ type: "Saree", color: "Red", size: "Free", fitting: "Traditional", material: "Silk" }),
      { type: "Kurti", color: "Yellow", size: "M", fitting: "Regular", material: "Cotton" },
      { type: "Kurti", color: "Green", size: "L", fitting: "Regular", material: "Cotton" },
      { type: "Blouse", color: "Maroon", size: "S", fitting: "Slim", material: "Silk" },
      { type: "Blouse", color: "Black", size: "M", fitting: "Slim", material: "Silk" },
      { type: "Salwar", color: "White", size: "M", fitting: "Loose", material: "Cotton" },
      { type: "Dupatta", color: "Pink", size: "Free", fitting: "Loose", material: "Chiffon" }
    ]
  }
];

/* ✅ API to send dummy data */
app.get("/api/fashion-data", (req, res) => {
  res.json(fashionData);
});

/* Existing routes (keep them) */
app.use("/api/fashion", fashionRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});