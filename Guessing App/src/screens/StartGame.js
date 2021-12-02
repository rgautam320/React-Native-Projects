import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

const StartGame = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [confirm, setConfirm] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberInputHandler = (input) => {
		setEnteredValue(input.replace(/[^0-9]/g, ""));
	};

	const resetInputHandler = () => {
		setEnteredValue("");
		setConfirm(false);
	};

	const confirmInputHandler = () => {
		const choosenNumber = parseInt(enteredValue);
		if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber >= 99) {
			Alert.alert("Invalid Number!", "Please enter a number between 1 and 99.", [
				{
					text: "Okay",
					style: "destructive",
					onPress: resetInputHandler,
				},
			]);
			return;
		}
		setSelectedNumber(choosenNumber);
		setConfirm(true);
		setEnteredValue("");
	};

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<Input style={styles.textInput} placeholder="Enter a Number" blurOnSubmit autoCapitalize="none" keyboardType="number-pad" maxLength={2} value={enteredValue} onChangeText={numberInputHandler} />
				<View style={styles.buttonContainer}>
					<MainButton onPress={resetInputHandler} color={colors.danger}>
						<AntDesign name="delete" size={24} />
					</MainButton>

					<MainButton onPress={confirmInputHandler}>
						<AntDesign name="checkcircle" size={24} />
					</MainButton>
				</View>
			</Card>
			{confirm && (
				<Card style={styles.outputContainer}>
					<Text>You Selected </Text>
					<NumberContainer>{selectedNumber}</NumberContainer>
					<MainButton
						onPress={() => {
							props.startGameScreen(selectedNumber);
						}}
					>
						START GAME
					</MainButton>
				</Card>
			)}
		</View>
	);
};

export default StartGame;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		height: 135,
		width: "95%",
	},
	textInput: {
		height: 40,
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-around",
		paddingHorizontal: 15,
	},
	outputContainer: {
		width: "90%",
		height: 165,
		marginTop: 20,
	},
});
