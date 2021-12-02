import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Text } from "react-native";
import { colors } from "../colors/colors";

export default function FormButton({ buttonTitle, ...rest }) {
	return (
		<TouchableOpacity {...rest} style={styles.buttonContainer}>
			<Text style={styles.buttonText}>{buttonTitle}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 10,
		width: "100%",
		height: Dimensions.get("window").height / 15,
		backgroundColor: colors.formBtn,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 3,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "bold",
		color: colors.white,
	},
});
