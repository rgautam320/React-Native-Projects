import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import colors from "../constants/colors";
import HeaderButton from "../components/HeaderButton";
import FavoriteScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FiltersScreen";
import Feed from "../screens/Feed";

const HomeNavigator = createStackNavigator({
	Home: {
		screen: Feed,
		navigationOptions: (navData) => {
			return {
				headerTitle: "Feed",
				headerStyle: {
					backgroundColor: colors.secondaryColor,
				},
				headerTintColor: colors.white,
				headerLeft: () => (
					<HeaderButtons HeaderButtonComponent={HeaderButton}>
						<Item
							title="Menu"
							iconName="ios-menu"
							onPress={() => {
								navData.navigation.toggleDrawer();
							}}
						/>
					</HeaderButtons>
				),
			};
		},
	},
	MealDetails: {
		screen: MealDetailsScreen,
		navigationOptions: (mealData) => {
			const isFav = mealData.navigation.getParam("toggleFavorite");
			const isFavorite = mealData.navigation.getParam("isFav");
			const title = mealData.navigation.getParam("title");

			return {
				headerTitle: title,
				headerStyle: {
					backgroundColor: colors.secondaryColor,
				},
				headerRight: () => (
					<HeaderButtons HeaderButtonComponent={HeaderButton}>
						<Item title="Favorite" iconName={isFavorite ? "ios-star" : "ios-star-outline"} onPress={isFav} />
					</HeaderButtons>
				),
			};
		},
	},
});

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
			navigationOptions: (navData) => {
				return {
					headerStyle: {
						backgroundColor: colors.tertiaryColor,
					},
					headerTitle: "Categories",
					headerLeft: () => (
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<Item
								title="Menu"
								iconName="ios-menu"
								onPress={() => {
									navData.navigation.toggleDrawer();
								}}
							/>
						</HeaderButtons>
					),
				};
			},
		},
		CategoriesMeals: {
			screen: CategoryMealScreen,
			navigationOptions: (navdata) => {
				const categories = navdata.navigation.getParam("categories");
				const categoryId = navdata.navigation.getParam("categoryId");
				const selectedCategory = categories.find((category) => category.id === categoryId);
				return {
					headerTitle: selectedCategory.title,
				};
			},
		},
	},
	{
		defaultNavigationOptions: {
			headerTitle: "Recipe App",
			headerStyle: {
				backgroundColor: colors.primaryColor,
			},
			headerTintColor: colors.white,
		},
	}
);

const FavoriteNavigator = createStackNavigator({
	Favorites: {
		screen: FavoriteScreen,
		navigationOptions: (navData) => {
			return {
				headerTitle: "Favorites",
				headerStyle: {
					backgroundColor: colors.accentColor,
				},
				headerTintColor: colors.white,
				headerLeft: () => (
					<HeaderButtons HeaderButtonComponent={HeaderButton}>
						<Item
							title="Menu"
							iconName="ios-menu"
							onPress={() => {
								navData.navigation.toggleDrawer();
							}}
						/>
					</HeaderButtons>
				),
			};
		},
	},
});

const FilterNavigator = createStackNavigator({
	Filters: {
		screen: FilterScreen,
		navigationOptions: (navData) => {
			return {
				headerTitle: "Filters",
				headerStyle: {
					backgroundColor: colors.accentColor,
				},
				headerTintColor: colors.white,
				headerLeft: () => (
					<HeaderButtons HeaderButtonComponent={HeaderButton}>
						<Item
							title="Menu"
							iconName="ios-menu"
							onPress={() => {
								navData.navigation.toggleDrawer();
							}}
						/>
					</HeaderButtons>
				),
				headerRight: () => (
					<HeaderButtons HeaderButtonComponent={HeaderButton}>
						<Item
							title="Menu"
							iconName="ios-save"
							onPress={() => {
								navData.navigation.getParam("save")();
							}}
						/>
					</HeaderButtons>
				),
			};
		},
	},
});

const ButtomMainNavigator = createBottomTabNavigator(
	{
		Feed: {
			screen: HomeNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <Ionicons name="ios-home-outline" size={25} color={tabInfo.tintColor} />;
				},
			},
		},
		Categories: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <Ionicons name="ios-restaurant-outline" size={25} color={tabInfo.tintColor} />;
				},
			},
		},
		Favorites: {
			screen: FavoriteNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <Ionicons name="ios-star-outline" size={25} color={tabInfo.tintColor} />;
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: colors.accentColor,
			activeBackgroundColor: colors.lightGrey,
			style: {
				backgroundColor: colors.primaryColor,
			},
		},
	}
);

const MainNavigator = createDrawerNavigator(
	{
		Meals: {
			screen: ButtomMainNavigator,
			navigationOptions: {
				drawerLabel: "Meals",
			},
		},
		Filters: FilterNavigator,
	},
	{
		contentOptions: {
			activeTintColor: colors.accentColor,
		},
	}
);

export default createAppContainer(MainNavigator);
