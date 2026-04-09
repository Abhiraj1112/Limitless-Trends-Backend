import Fashion from "../models/Fashion.js";

// 🔥 GET DATA BY CITY
export const getFashionData = async (req, res) => {
  const { city } = req.query;

  try {
    const data = await Fashion.find({ city });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔥 MOCK SCRAPER (GENERATES DATA)
export const generateMockData = async (req, res) => {
  const { city } = req.body;

  const sample = [
    { type: "Kurta", color: "Saffron", material: "Cotton" },
    { type: "Kurti", color: "Yellow", material: "Cotton" },
    { type: "Lehenga", color: "Maroon", material: "Silk" },
    { type: "Dress", color: "Red", material: "Satin" }
  ];

  try {
    const newData = sample.map(item => ({
      ...item,
      city,
      image: "https://via.placeholder.com/150"
    }));

    await Fashion.insertMany(newData);

    res.json({ message: "Mock data generated 🚀", data: newData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};