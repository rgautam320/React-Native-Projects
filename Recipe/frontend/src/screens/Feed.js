import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const Feed = ({ navigation }) => {
	const meals = useSelector((state) => state.meals.filtered);
	return <MealList displayedMeals={meals} navigation={navigation} />;
};

export default Feed;
