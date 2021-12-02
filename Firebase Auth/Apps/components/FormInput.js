import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../colors/colors";

export default function FormInput({ labelValue, placeholderValue, iconType, ...rest }) {
	return (
		<View style={styles.inputContainer}>
			<View style={styles.iconStyle}>
				<MaterialIcons name={iconType} size={25} color={colors.black} />
			</View>
			<TextInput
				style={styles.input}
				value={labelValue}
				placeholder={placeholderValue}
				numberOfLines={1}
				placeholderTextColor={colors.grey}
				{...rest}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 5,
		width: "100%",
		height: Dimensions.get("window").height / 15,
		borderColor: colors.inputContainerColor,
		borderRadius: 3,
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.white,
	},
	iconStyle: {
		padding: 10,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRightColor: colors.inputContainerColor,
		borderRightWidth: 1,
		width: 50,
	},
	input: {
		padding: 10,
		flex: 1,
		fontSize: 16,
		color: colors.grey,
		justifyContent: "center",
		alignItems: "center",
	},
	inputField: {
		padding: 10,
		marginVertical: 5,
		width: Dimensions.get("window").width / 1.5,
		height: Dimensions.get("window").height / 15,
		fontSize: 16,
		borderRadius: 8,
		borderWidth: 1,
	},
});
