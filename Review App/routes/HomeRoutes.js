import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Review from "../screens/Review";
import Header from "../shared/Header";

const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header navigation={navigation} title='Review Zone' />,
			};
		},
	},
	Review: {
		screen: Review,
		navigationOptions: {
			headerTintColor: "white",
		},
	},
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: "#555",
		},
		headerTitleStyle: {
			fontWeight: "bold",
		},
	},
});

export default createAppContainer(HomeStack);
