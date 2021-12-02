import MealModel from "../models/mealsModel.js";

export const getMeals = async (req, res) => {
	try {
		const meals = await MealModel.find();
		res.status(200).json({ meals: meals });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const addMeals = async (req, res) => {
	const meal = req.body;

	try {
		if (title) {
			const newMeal = new MealModel(meal);
			await newMeal.save();
			res.status(200).json(newMeal);
		} else {
			res.status(500).json({ message: "Input Error." });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateMeals = async (req, res) => {
	const { id } = req.query;
	const meal = req.body;
	try {
		const updatedMeal = await MealModel.findByIdAndUpdate(id, meal, { new: true });
		res.status(200).json({ updatedMeal });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteMeals = async (req, res) => {
	const { _id } = req.body;
	try {
		await MealModel.findByIdAndDelete(_id);
		res.status(200).json({ message: `${_id} removed successfully.` });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
