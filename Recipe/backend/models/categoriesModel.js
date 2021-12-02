import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
	title: { type: String, required: true },
	color: { type: String, required: true },
});

export default mongoose.model("CategoryModel", categoriesSchema);
