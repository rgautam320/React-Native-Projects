import React from "react";
import { StatusBar, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { View } from "native-base";
import { styles } from "./App/style/style";
import { Ionicons } from "@expo/vector-icons";
import TabScreen from "./App/screens/TabScreen";
import { colors } from "./App/color/color";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			...Ionicons.font,
		});
		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return (
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<ActivityIndicator animating={true} color={colors.grey} />
				</View>
			);
		} else {
			return (
				<>
					<StatusBar style={styles.statusBar} />
					<View style={styles.container}>
						<TabScreen />
					</View>
				</>
			);
		}
	}
}
