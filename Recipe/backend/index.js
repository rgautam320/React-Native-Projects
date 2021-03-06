import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import categoriesRoutes from "./routes/categoriesRoutes.js";
import mealRoutes from "./routes/mealsRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

app.use("/categories", categoriesRoutes);
app.use("/meals", mealRoutes);

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: ${process.env.PORT}`)))
	.catch((error) => console.log(error.message));
