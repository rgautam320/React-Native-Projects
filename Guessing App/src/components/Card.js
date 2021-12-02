import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const Card = (props) => {
	return <View style={{ ...styles.inputContainer, ...props.style }}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		shadowColor: colors.black,
		padding: 5,
		shadowRadius: 0,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		backgroundColor: colors.white,
		borderRadius: 10,
		elevation: 5,
	},
});
