import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

const Category = ({ title, color, onSelect }) => {
	return (
		<View style={{ ...styles.gridItem, backgroundColor: color }}>
			<TouchableOpacity style={styles.innerContainer} onPress={onSelect}>
				<Text numberOfLines={2} style={styles.title}>
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Category;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 115,
		padding: 10,
		borderRadius: 12,
		elevation: 5,
	},
	innerContainer: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	title: {
		color: colors.white,
		fontWeight: "bold",
	},
});
