import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 60,
		paddingTop: 10,
		backgroundColor: colors.theme,
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		color: colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default Header;
