import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import { styles } from "../css/AddToDo";

export default function AddToDo({ submitHandler }) {
	const [todo, setToDo] = useState("");
	const changeHandler = (val) => {
		setToDo(val);
	};
	return (
		<>
			<View>
				<TextInput
					style={styles.input}
					placeholder='Add New ToDo'
					value={todo}
					onChangeText={changeHandler}
				/>
				<View style={styles.btnStyle}>
					<Button
						title='Add ToDo'
						onPress={() => {
							submitHandler(todo);
							setToDo("");
						}}
					/>
				</View>
			</View>
		</>
	);
}
