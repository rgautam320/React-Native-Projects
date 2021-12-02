import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/ToDoItem";
import { MaterialIcons } from "@expo/vector-icons";

export default function ToDoItem({ item, pressHandler }) {
	return (
		<>
			<View style={styles.eachItem}>
				<TouchableOpacity>
					<View style={styles.flexView}>
						<Text style={styles.item}>{item.name}</Text>
						<MaterialIcons
							name='delete'
							size={24}
							color='grey'
							onPress={() => pressHandler(item.key)}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</>
	);
}
