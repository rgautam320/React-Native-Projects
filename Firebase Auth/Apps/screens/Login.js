import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { colors } from "../colors/colors";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

export default function Login({ navigation }) {
	const [person, setPerson] = useState({
		email: "",
		password: "",
	});

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Image source={require("../assets/logo.png")} style={styles.logo} />
				<Text style={styles.text}>RG Social App</Text>
				<FormInput
					placeholderValue='Enter Your Email'
					iconType='person-outline'
					keyboardType='email-address'
					autoCapitalize='none'
					autoCorrect={false}
					labelValue={person.email}
					onChangeText={(email) => setPerson({ email: email })}
				/>
				<FormInput
					placeholderValue='Enter Your Password'
					iconType='lock-outline'
					labelValue={person.password}
					secureTextEntry={true}
					onChangeText={(pass) => setPerson({ password: pass })}
				/>
				<FormButton buttonTitle='Login' />
				<TouchableOpacity style={styles.forgotButton}>
					<Text style={styles.textForgot}>Forgot Password?</Text>
				</TouchableOpacity>
				<SocialButton
					buttonTitle='Login with Google'
					backgroundColor={colors.googleColor}
					color={colors.googleTextColor}
					btnType='google'
				/>
				<SocialButton
					buttonTitle='Login with Facebook'
					backgroundColor={colors.facebookColor}
					color={colors.white}
					btnType='facebook'
				/>
				<TouchableOpacity
					style={styles.forgotButton}
					onPress={() => navigation.navigate("Signup")}
				>
					<View style={styles.donthaveAccount}>
						<Text style={styles.textDontHave}>Don't have account?</Text>
						<Text style={styles.textForgot}>Sign up</Text>
					</View>
				</TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		paddingTop: 50,
	},
	logo: {
		height: 150,
		width: 150,
		resizeMode: "cover",
	},
	text: {
		fontSize: 28,
		marginBottom: 10,
		color: colors.blue,
	},
	textForgot: {
		fontSize: 16,
		marginBottom: 10,
		color: colors.blue,
	},
	textDontHave: {
		fontSize: 16,
		marginBottom: 10,
		color: colors.black,
		marginRight: 10,
	},
	navButton: {
		marginTop: 15,
	},
	forgotButton: {
		marginVertical: 15,
	},
	navButtonText: {
		fontSize: 18,
		fontWeight: "500",
		color: "#2e64e5",
	},
	donthaveAccount: {
		flexDirection: "row",
	},
});
