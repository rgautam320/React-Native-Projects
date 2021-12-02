import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function AppStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
