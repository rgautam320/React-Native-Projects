import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
	Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../colors/colors";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

export default function Signup({ navigation }) {
	const [person, setPerson] = useState({
		username: "",
		name: "",
		email: "",
		password: "",
		conPassword: "",
	});

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backBtn}
					onPress={() => navigation.navigate("Login")}
				>
					<MaterialIcons name='arrow-back' size={25} color='black' />
				</TouchableOpacity>
				<Text style={styles.text}>Create an Account</Text>
				<FormInput
					placeholderValue='Enter Username'
					iconType='person-outline'
					autoCorrect={false}
					labelValue={person.username}
					onChangeText={(user) => setPerson({ username: user })}
				/>
				<FormInput
					placeholderValue='Enter Your Name'
					iconType='person'
					autoCorrect={false}
					labelValue={person.name}
					onChangeText={(name) => setPerson({ name: name })}
				/>
				<FormInput
					placeholderValue='Enter Your Email'
					iconType='email'
					keyboardType='email-address'
					autoCapitalize='none'
					autoCorrect={false}
					labelValue={person.email}
					onChangeText={(email) => setPerson({ email: email })}
				/>
				<FormInput
					placeholderValue='Enter Your Password'
					iconType='lock'
					secureTextEntry={true}
					labelValue={person.password}
					onChangeText={(pass) => setPerson({ password: pass })}
				/>
				<FormInput
					placeholderValue='Confirm Your Password'
					iconType='lock'
					secureTextEntry={true}
					labelValue={person.conPassword}
					onChangeText={(pass) => setPerson({ conPassword: pass })}
				/>
				<TouchableOpacity
					onPress={() =>
						Alert.alert(
							"Terms and Conditions",
							"I agree all the terms of services and privacy policy.",
							[
								{
									text: "Okay",
								},
							]
						)
					}
				>
					<Text>
						I accept all{" "}
						<Text style={styles.termsCondition}>
							* Terms and Conditions.
						</Text>
					</Text>
				</TouchableOpacity>
				<FormButton buttonTitle='Signup' />
				<TouchableOpacity
					style={styles.forgotButton}
					onPress={() => navigation.navigate("Login")}
				>
					<View style={styles.alreadyAccount}>
						<Text style={styles.alreadyHave}>Already have an account?</Text>
						<Text style={styles.textLogin}>Login</Text>
					</View>
				</TouchableOpacity>
				<SocialButton
					buttonTitle='Sign up with Google'
					backgroundColor={colors.googleColor}
					color={colors.googleTextColor}
					btnType='google'
				/>
				<SocialButton
					buttonTitle='Sign up with Facebook'
					backgroundColor={colors.facebookColor}
					color={colors.white}
					btnType='facebook'
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		paddingTop: 50,
	},
	backBtn: {
		left: -5,
		top: -Dimensions.get("window").height / 12,
	},
	text: {
		fontSize: 24,
		marginBottom: 10,
		marginTop: -30,
		color: colors.blue,
		textAlign: "center",
	},
	alreadyAccount: {
		flexDirection: "row",
		marginVertical: 6,
		justifyContent: "center",
	},
	textLogin: {
		fontSize: 16,
		color: colors.blue,
	},
	alreadyHave: {
		fontSize: 16,
		color: colors.black,
		marginRight: 10,
	},
	termsCondition: {
		color: colors.orange,
	},
});
