import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const MainButton = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={styles.touchable}>
			<Text style={styles.buttonText}>{props.children}</Text>
		</TouchableOpacity>
	);
};

export default MainButton;

const styles = StyleSheet.create({
	touchable: {
		minWidth: 80,
		padding: 10,
		borderRadius: 16,
		backgroundColor: colors.theme,
	},
	buttonText: {
		color: colors.white,
		fontSize: 16,
		textAlign: "center",
	},
});
