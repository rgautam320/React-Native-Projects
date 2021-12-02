import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	statusBar: {
		backgroundColor: "#C2185B",
		height: Constants.statusBarHeight,
	},
	content: {
		flex: 1,
	},
});
