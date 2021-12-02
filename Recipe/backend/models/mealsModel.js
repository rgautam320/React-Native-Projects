import mongoose from "mongoose";

const mealsSchema = mongoose.Schema({
	categoryIds: { type: Array, required: true },
	title: { type: String, required: true },
	affordability: { type: String, required: true },
	complexity: { type: String, required: true },
	imageUrl: { type: String, required: true },
	duration: { type: Number, required: true },
	ingredients: { type: Array, required: true },
	steps: { type: Array, required: true },
	isGlutenFree: { type: Boolean, required: true },
	isVegan: { type: Boolean, required: true },
	isVegetarian: { type: Boolean, required: true },
	isLactoseFree: { type: Boolean, required: true },
});

export default mongoose.model("MealModel", mealsSchema);
