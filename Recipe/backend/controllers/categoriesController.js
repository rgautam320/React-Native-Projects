import CategoryModel from "../models/categoriesModel.js";

export const getCategories = async (req, res) => {
	try {
		const categories = await CategoryModel.find();
		res.status(200).json({ categories: categories });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const addCategories = async (req, res) => {
	const { title, color } = req.body;

	try {
		if (title && color) {
			const newCategory = new CategoryModel({ title: title, color: color });
			await newCategory.save();
			res.status(200).json(newCategory);
		} else {
			res.status(500).json({ message: "Title and Color Error." });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteCategories = async (req, res) => {
	const { _id } = req.body;
	try {
		await CategoryModel.findByIdAndRemove(_id);
		res.status(200).json({ message: `${_id} removed successfully.` });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
