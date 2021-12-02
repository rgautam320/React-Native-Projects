import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const NumberContainer = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: colors.primary,
		padding: 20,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	number: {
		color: colors.black,
		fontSize: 22,
	},
});
