import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealScreen = ({ navigation }) => {
	const meals = useSelector((state) => state.meals.filtered);
	const categoryId = navigation.getParam("categoryId");

	const displayedMeals = meals.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

	return (
		<View style={styles.screen}>
			{displayedMeals.length === 0 ? (
				<View>
					<Text>No meals here. Please check your filters.</Text>
				</View>
			) : (
				<MealList displayedMeals={displayedMeals} navigation={navigation} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoryMealScreen;
