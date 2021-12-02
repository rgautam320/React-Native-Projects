import React from "react";
import { View, StatusBar } from "react-native";
import { styles } from "./styles/style";
import Navigator from "./routes/RootDrawer";

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<StatusBar style={styles.statusBar} />
				<Navigator />
			</View>
		</>
	);
}
