import React from "react";
import { View, Text } from "react-native";
import { styles } from "../css/Header";

export default function Header() {
	return (
		<>
			<View style={styles.header}>
				<Text style={[styles.headerText]}>ToDo App</Text>
			</View>
		</>
	);
}
