import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../constants/colors";
import { filteredMeals } from "../data/reducers/reducer";

const FiltersScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const [isGlutonFree, setIsGlutonFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const saveFilters = useCallback(() => {
		const filters = {
			glutenFree: isGlutonFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian,
		};
		dispatch(filteredMeals(filters));
	}, [isGlutonFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

	useEffect(() => {
		navigation.setParams({ save: saveFilters });
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.sectionTitle}>Filter Meals</Text>
			<View style={styles.sectionView}>
				<View style={styles.sectionListItem}>
					<Text style={styles.sectionListItemText}>Gluton Free</Text>
					<Switch value={isGlutonFree} onValueChange={() => setIsGlutonFree(!isGlutonFree)} thumbColor={colors.accentColor} />
				</View>
				<View style={styles.sectionListItem}>
					<Text style={styles.sectionListItemText}>Lactose Free</Text>
					<Switch value={isLactoseFree} onValueChange={() => setIsLactoseFree(!isLactoseFree)} thumbColor={colors.accentColor} />
				</View>
				<View style={styles.sectionListItem}>
					<Text style={styles.sectionListItemText}>Vegan</Text>
					<Switch value={isVegan} onValueChange={() => setIsVegan(!isVegan)} thumbColor={colors.accentColor} />
				</View>
				<View style={styles.sectionListItem}>
					<Text style={styles.sectionListItemText}>Vegetarian</Text>
					<Switch value={isVegetarian} onValueChange={() => setIsVegetarian(!isVegetarian)} thumbColor={colors.accentColor} />
				</View>
			</View>
		</View>
	);
};

export default FiltersScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
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
		width: "95%",
	},
	sectionListItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderColor: colors.lightGrey,
		borderWidth: 1,
		borderRadius: 5,
		marginVertical: 6,
		padding: 8,
	},
	sectionListItemText: {
		fontSize: 15,
		textAlignVertical: "center",
	},
});
