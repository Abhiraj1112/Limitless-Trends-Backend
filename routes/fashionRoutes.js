import express from "express";
import { getFashionData, generateMockData } from "../controllers/fashionController.js";

const router = express.Router();

router.get("/", getFashionData);
router.post("/generate", generateMockData);

export default router;