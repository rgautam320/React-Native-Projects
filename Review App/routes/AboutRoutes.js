import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Header from "../shared/Header";

const screens = {
	About: {
		screen: About,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => (
					<Header navigation={navigation} title='About Review Zone' />
				),
			};
		},
	},
};

const AboutStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: "#555",
		},
		headerTitleStyle: {
			fontWeight: "bold",
		},
	},
});

export default AboutStack;
