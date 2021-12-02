import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Meal from "./Meal";

const MealList = ({ displayedMeals, navigation }) => {
	const favorite = useSelector((state) => state.meals.favorite);
	const meals = useSelector((state) => state.meals.meals);
	const MealItem = (itemData) => {
		const isFavorite = favorite.some((meal) => meal.id === itemData.item.id);
		return (
			<Meal
				duration={itemData.item.duration}
				title={itemData.item.title}
				onSelect={() => {
					navigation.navigate({
						routeName: "MealDetails",
						params: {
							meals: meals,
							mealId: itemData.item.id,
							isFav: isFavorite,
							title: itemData.item.title,
						},
					});
				}}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
			/>
		);
	};
	return (
		<View style={styles.screen}>
			<FlatList style={styles.flatListStyle} data={displayedMeals} keyExtractor={(item) => item.id} renderItem={MealItem} />
		</View>
	);
};

export default MealList;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	flatListStyle: {
		width: "100%",
		paddingHorizontal: 10,
	},
});
