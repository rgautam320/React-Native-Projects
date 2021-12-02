import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, View, Text } from "react-native";
import { colors } from "../colors/colors";
import { FontAwesome5 } from "@expo/vector-icons";

export default function FormButton({ buttonTitle, btnType, color, backgroundColor, ...rest }) {
	let bgColor = backgroundColor;
	return (
		<TouchableOpacity
			{...rest}
			style={[styles.buttonContainer, { backgroundColor: bgColor }, color]}
		>
			<View style={styles.iconWrapper}>
				<FontAwesome5 style={styles.icon} name={btnType} size={25} color={color} />
			</View>
			<View style={styles.btnTextWrapper}>
				<Text style={[styles.buttonText, { color: color }]}>{buttonTitle}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 10,
		width: "100%",
		height: Dimensions.get("window").height / 15,
		padding: 10,
		flexDirection: "row",
		borderRadius: 3,
	},
	iconWrapper: {
		width: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		fontWeight: "bold",
	},
	btnTextWrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "bold",
		color: colors.white,
	},
});
