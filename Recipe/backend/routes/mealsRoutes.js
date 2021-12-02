import express from "express";
import { addMeals, deleteMeals, getMeals, updateMeals } from "../controllers/mealsController.js";

const router = express.Router();

router.post("/getMeals", getMeals);
router.post("/addMeals", addMeals);
router.post("/deleteMeals", deleteMeals);
router.post("/updateMeals", updateMeals);

export default router;
