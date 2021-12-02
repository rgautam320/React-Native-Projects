import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const FavoritesScreen = ({ navigation }) => {
	const favorites = useSelector((state) => state.meals.favorite);

	return (
		<View style={styles.screen}>
			{favorites.length > 0 ? (
				<MealList displayedMeals={favorites} navigation={navigation} />
			) : (
				<View style={styles.noContent}>
					<Text>No favorites added.</Text>
				</View>
			)}
		</View>
	);
};

export default FavoritesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	noContent: {
		paddingTop: 25,
	},
});
