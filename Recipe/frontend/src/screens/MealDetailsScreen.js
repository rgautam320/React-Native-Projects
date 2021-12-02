import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import colors from "../constants/colors";
import { favoriteMeals } from "../data/reducers/reducer";

const MealDetailsScreen = ({ navigation }) => {
	const mealId = navigation.getParam("mealId");

	const isFav = useSelector((state) => state.meals.favorite.some((meal) => meal.id === mealId));
	const meals = useSelector((state) => state.meals.meals);
	const mealItem = meals.find((meal) => meal.id === mealId);

	const dispatch = useDispatch();

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(favoriteMeals(mealId));
	}, [dispatch, mealId]);

	useEffect(() => {
		navigation.setParams({
			toggleFavorite: toggleFavoriteHandler,
			isFav: isFav,
		});
	}, [toggleFavoriteHandler, isFav]);

	return (
		<ScrollView>
			<View style={styles.screen}>
				<Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
				<View style={styles.details}>
					<View style={styles.detailsItem}>
						<Text>{mealItem.duration}m</Text>
					</View>
					<View style={styles.detailsItem}>
						<Text>{mealItem.complexity.toUpperCase()}</Text>
					</View>
					<View style={styles.detailsItem}>
						<Text>{mealItem.affordability.toUpperCase()}</Text>
					</View>
				</View>
				<View style={styles.sectionView}>
					<Text style={styles.sectionTitle}>Ingredients</Text>
					<View>
						{mealItem.ingredients.map((val, ind) => (
							<View style={styles.sectionListItem} key={ind}>
								<Text>{val}</Text>
							</View>
						))}
					</View>
				</View>
				<View style={styles.sectionView}>
					<Text style={styles.sectionTitle}>Steps</Text>
					<View>
						{mealItem.steps.map((val, ind) => (
							<View style={styles.sectionListItem} key={ind}>
								<Text>{val}</Text>
							</View>
						))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	image: {
		height: 200,
		width: "100%",
	},
	details: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingVertical: 5,
		backgroundColor: colors.lightGrey,
	},
	sectionTitle: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 10,
	},
	sectionView: {
		borderColor: colors.lightGrey,
		borderWidth: 1,
		paddingHorizontal: 8,
		margin: 6,
	},
	sectionListItem: {
		borderColor: colors.lightGrey,
		borderWidth: 2,
		borderRadius: 5,
		marginVertical: 6,
		padding: 8,
	},
});
