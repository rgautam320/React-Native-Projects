import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Category from "../components/Category";
import { useSelector } from "react-redux";

const CategoriesScreen = ({ navigation }) => {
	const categories = useSelector((state) => state.meals.categories);

	const renderGridItem = (itemData) => {
		return (
			<Category
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					navigation.navigate({
						routeName: "CategoriesMeals",
						params: {
							categoryId: itemData.item.id,
							categories: categories,
						},
					});
				}}
			/>
		);
	};
	return (
		<View style={styles.screen}>
			<FlatList data={categories} renderItem={renderGridItem} numColumns={2} />
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
});
