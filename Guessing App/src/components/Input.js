import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
	input: {
		borderBottomColor: colors.grey,
		borderBottomWidth: 1,
		marginVertical: 10,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		width: "90%",
		paddingHorizontal: 10,
		marginVertical: 10,
	},
});
