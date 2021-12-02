import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "dodgerblue",
		alignItems: "center",
		justifyContent: "center",
	},
	statusBar: {
		height: Constants.statusBarHeight,
		backgroundColor: "coral",
	},
});
