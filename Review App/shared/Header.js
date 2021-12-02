import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles/style";

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};

	return (
		<View style={styles.header}>
			<MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />

			<View style={styles.headerTitle}>
				<Image source={require("../assets/heart_logo.png")} style={styles.logo} />
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	);
}
