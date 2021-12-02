import React, { useState } from "react";
import { View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "./css/App";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddToDo from "./components/AddToDo";

export default function App() {
	const [todo, setTodo] = useState([
		{
			name: "First ToDo",
			key: "0.2156456",
		},
	]);

	const pressHandler = (key) => {
		setTodo((oldData) => {
			return oldData.filter((todo) => todo.key !== key);
		});
	};

	const submitHandler = (item) => {
		if (item.length > 20) {
			Alert.alert("OOPS!", "Please don't add more than 20 chars.", [
				{
					text: "Okay",
					onPress: () => {
						console.log("Closed");
					},
				},
			]);
		} else if (item.length < 3) {
			Alert.alert("OOPS!", "Please add more than 3 chars.", [
				{
					text: "Okay",
					onPress: () => {
						console.log("Closed");
					},
				},
			]);
		} else {
			setTodo((oldTodo) => [{ name: item, key: Math.random().toString() }, ...oldTodo]);
		}
	};

	const dismissKeyboard = () => {
		Keyboard.dismiss();
	};

	return (
		<>
			<TouchableWithoutFeedback onPress={dismissKeyboard}>
				<View style={[styles.container]}>
					<View style={styles.statusBar}></View>
					<Header />
					<AddToDo submitHandler={submitHandler} />
					<View style={styles.content}>
						<FlatList
							numColumns={1}
							data={todo}
							renderItem={({ item }) => (
								<ToDoItem item={item} pressHandler={pressHandler} />
							)}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
}
