import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Header from "./src/components/Header";
import GameOver from "./src/screens/GameOver";
import GameScreen from "./src/screens/GameScreen";
import StartGame from "./src/screens/StartGame";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRound, setGuessRound] = useState(0);

	const startGameScreen = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setGuessRound(0);
	};

	const gameOverHandler = (noOfRounds) => {
		setGuessRound(noOfRounds);
	};

	let content = <StartGame startGameScreen={startGameScreen} />;
	if (userNumber && guessRound <= 0) {
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
	} else if (guessRound > 0) {
		content = <GameOver rounds={guessRound} setGuessRound={setGuessRound} setUserNumber={setUserNumber} userNumber={userNumber} />;
	}
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<View style={styles.container}>
				<Header title="Guessing Game" />
				{content}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
