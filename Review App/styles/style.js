import { StyleSheet } from "react-native";
import Constants from "expo-constants";
export const styles = StyleSheet.create({
	// Global
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	statusBar: {
		height: Constants.statusBarHeight,
	},

	// Header
	header: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 24,
		letterSpacing: 1,
		color: "white",
	},
	icon: {
		position: "absolute",
		left: 10,
		color: "white",
	},
	headerTitle: {
		flexDirection: "row",
		alignItems: "center",
	},
	logo: {
		marginHorizontal: 10,
		width: 26,
		height: 26,
	},

	// Home
	itemText: {
		fontSize: 20,
		padding: 10,
	},
	centerIcon: {
		flexDirection: "row",
		justifyContent: "center",
		height: 60,
		alignItems: "center",
	},
	closeIcon: {
		marginTop: 20,
	},
	itemFlex: {
		flexDirection: "row",
	},
	deleteIcon: {
		position: "absolute",
		right: 0,
	},

	// About
	aboutHeading: {
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 60,
		marginTop: 10,
	},
	aboutStyle: {
		fontSize: 20,
		padding: 10,
		textAlign: "justify",
		letterSpacing: 1,
		lineHeight: 26,
	},

	// Review
	rating: {
		flexDirection: "row",
		paddingTop: 16,
		marginTop: 16,
		borderTopWidth: 1,
		borderTopColor: "#eee",
		justifyContent: "center",
		alignItems: "center",
	},
	reviewHeading: {
		fontWeight: "bold",
		fontSize: 22,
	},

	// Card
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: "#fff",
		shadowOffset: { width: 1, height: 1 },
		shadowColor: "#444",
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 8,
		marginVertical: 8,
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 12,
	},

	// Modal
	inputView: {
		marginVertical: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ddd",
		padding: 10,
		fontSize: 18,
		borderRadius: 6,
		marginHorizontal: 10,
		marginVertical: 6,
	},
	modalView: {
		flex: 1,
	},
	submitBtn: {
		marginHorizontal: 60,
		marginTop: 15,
	},
	errorText: {
		marginHorizontal: 12,
		color: "red",
		textTransform: "capitalize",
		marginBottom: 10,
	},
});
