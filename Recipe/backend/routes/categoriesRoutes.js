import express from "express";
import { addCategories, deleteCategories, getCategories } from "../controllers/categoriesController.js";

const router = express.Router();

router.post("/getCategories", getCategories);
router.post("/addCategories", addCategories);
router.post("/deleteCategories", deleteCategories);

export default router;
