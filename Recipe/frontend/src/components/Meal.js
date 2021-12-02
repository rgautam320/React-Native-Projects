import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import colors from "../constants/colors";

const Meal = ({ title, onSelect, duration, complexity, affordability, image }) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={onSelect}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground source={{ uri: image }} style={styles.bgImage}>
							<Text style={styles.title} numberOfLines={2}>
								{title}
							</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetails }}>
						<Text style={styles.detailsItem}>{duration}m</Text>
						<Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Meal;

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: colors.lightGrey,
		marginVertical: 8,
		borderRadius: 6,
		overflow: "hidden",
	},
	mealRow: {
		flexDirection: "row",
	},
	mealHeader: {
		height: "86%",
	},
	mealDetails: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
	},
	detailsItem: {
		lineHeight: 26,
	},
	bgImage: {
		height: "100%",
		width: "100%",
		justifyContent: "flex-end",
	},
	title: {
		color: colors.white,
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "right",
		paddingHorizontal: 10,
		paddingVertical: 5,
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},
});
