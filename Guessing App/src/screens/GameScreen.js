import React, { useState, useRef, useEffect } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randNum = Math.floor(Math.random() * (max - min) + min);
	if (randNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randNum;
	}
};

const GameScreen = ({ userChoice, onGameOver }) => {
	const firstGuess = generateRandomBetween(1, 100, userChoice);
	const [currentGuess, setCurrentGuess] = useState(firstGuess);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const [pastGuesses, setPastGuesses] = useState([firstGuess]);

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const onClickHandler = (direction) => {
		if ((direction === "higher" && currentGuess > userChoice) || (direction === "lower" && userChoice > currentGuess)) {
			Alert.alert("Don't Lie", "You know that is wrong!!!", [{ text: "Sorry", style: "cancel" }]);
			return;
		} else {
			if (direction === "lower") {
				currentHigh.current = currentGuess;
			} else {
				currentLow.current = currentGuess + 1;
			}
			const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
			setCurrentGuess(nextNumber);
			setPastGuesses((prev) => [nextNumber, ...prev]);
		}
	};

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Opponent's Guess</Text>
			<Card style={styles.buttonContainer}>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.buttons}>
					<MainButton
						onPress={() => {
							onClickHandler("lower");
						}}
					>
						<Ionicons name="md-remove-circle" size={24} />
					</MainButton>
					<MainButton
						onPress={() => {
							onClickHandler("higher");
						}}
					>
						<Ionicons name="md-add-circle" size={24} />
					</MainButton>
				</View>
			</Card>

			<View style={styles.scrollViewContainer}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					{pastGuesses.map((val, ind) => (
						<View key={val} style={styles.listItem}>
							<Text>#{pastGuesses.length - ind}</Text>
							<Text>{val}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	buttonContainer: {
		height: 200,
		width: "80%",
		justifyContent: "space-around",
		marginTop: 20,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%",
	},
	button: {
		width: 80,
	},
	scrollViewContainer: {
		height: 300,
		width: "80%",
		marginTop: 10,
	},
	scrollContainer: {
		alignItems: "center",
		flexGrow: 1,
		justifyContent: "flex-end",
	},
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		height: 40,
		width: "100%",
		borderColor: colors.black,
		borderWidth: 1,
		borderRadius: 5,
		marginVertical: 3,
		padding: 10,
	},
});
