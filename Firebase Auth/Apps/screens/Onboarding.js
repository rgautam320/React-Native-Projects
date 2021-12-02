import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { colors } from "../colors/colors";

const Done = ({ ...props }) => {
	return (
		<TouchableOpacity style={styles.done} {...props}>
			<Text style={styles.doneText}>Done</Text>
		</TouchableOpacity>
	);
};

export default function OnboardingScreen({ navigation }) {
	const skipdoneToHome = () => {
		navigation.replace("Login");
	};
	return (
		<>
			<Onboarding
				onSkip={skipdoneToHome}
				onDone={skipdoneToHome}
				DoneButtonComponent={Done}
				pages={[
					{
						backgroundColor: colors.slider1,
						image: <Image source={require("../assets/slider-1.png")} />,
						title: "Welcome",
						subtitle: "Welcome to the World Best Auth System",
					},
					{
						backgroundColor: colors.slider2,
						image: <Image source={require("../assets/slider-2.png")} />,
						title: "Perfect Choice",
						subtitle: "You have made a perfect choice",
					},
					{
						backgroundColor: colors.slider3,
						image: <Image source={require("../assets/slider-3.png")} />,
						title: "Completed",
						subtitle: "Done with React Native Onboarding Swiper",
					},
				]}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	done: {
		backgroundColor: "transparent",
		color: colors.white,
		marginHorizontal: 15,
	},
	doneText: {
		color: colors.white,
		fontSize: 16,
	},
});
