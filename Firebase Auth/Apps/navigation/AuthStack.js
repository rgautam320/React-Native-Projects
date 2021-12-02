import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import OnboardingScreen from "../screens/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
	const [firstLaunch, setFirstLaunch] = useState(null);
	let routeName;

	useEffect(() => {
		AsyncStorage.getItem("Launched").then((value) => {
			if (value === null) {
				AsyncStorage.setItem("Launched", "true");
				setFirstLaunch(true);
			} else {
				setFirstLaunch(false);
			}
		});
	}, []);

	if (firstLaunch === null) {
		return null;
	} else if (firstLaunch === true) {
		routeName = "Onboarding";
	} else {
		routeName = "Login";
	}

	return (
		<>
			<StatusBar style={{ height: Constants.statusBarHeight }} />
			<Stack.Navigator headerMode='none' initialRouteName={routeName}>
				<Stack.Screen name='Onboarding' component={OnboardingScreen} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Signup' component={Signup} />
			</Stack.Navigator>
		</>
	);
}
