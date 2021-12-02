import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

const GameOver = ({ rounds, setGuessRound, setUserNumber, userNumber }) => {
	const onRestart = () => {
		setGuessRound(0);
		setUserNumber(0);
	};
	return (
		<View style={styles.screen}>
			<Text style={styles.titleGameOver}>The Game is Over!</Text>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg" }} />
			</View>
			<View style={styles.resultContainer}>
				<Text style={styles.resultText}>
					Your phone needed <Text style={styles.result}> {rounds} </Text> rounds to correctly guess <Text style={styles.result}> {userNumber}</Text>.
				</Text>
			</View>
			<MainButton onPress={onRestart}>RESTART</MainButton>
		</View>
	);
};

export default GameOver;

const styles = StyleSheet.create({
	screen: {
		height: 500,
		justifyContent: "center",
		alignItems: "center",
	},
	titleGameOver: {
		fontSize: 22,
		fontWeight: "bold",
	},
	imageContainer: {
		width: Dimensions.get("window").width * 0.8,
		height: Dimensions.get("window").width * 0.8,
		borderWidth: 2,
		borderColor: colors.black,
		borderRadius: 150,
		overflow: "hidden",
		marginVertical: 15,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	resultContainer: {
		width: "80%",
	},
	resultText: {
		fontSize: 19,
		textAlign: "center",
		marginVertical: 15,
		fontWeight: "bold",
	},
	result: {
		color: colors.theme,
	},
});
