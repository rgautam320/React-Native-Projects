import React from "react";
import { View, TextInput, TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { styles } from "../styles/style";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../components/Button";

export default function FormModal({ addReview }) {
	const FormValidator = yup.object({
		title: yup.string().required().min(3),
		body: yup.string().required().min(6),
		rating: yup
			.string()
			.required()
			.test("Rating-Validator", "Rating must be 1-5", (val) => {
				return parseInt(val) < 6 && parseInt(val) > 0;
			}),
	});

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Formik
					initialValues={{ title: "", body: "", rating: "" }}
					validationSchema={FormValidator}
					onSubmit={(values, actions) => {
						addReview(values);
						actions.resetForm();
					}}
				>
					{(props) => (
						<View style={styles.inputView}>
							<TextInput
								placeholder='Review Title'
								style={styles.input}
								value={props.values.title}
								onChangeText={props.handleChange("title")}
							/>
							<Text style={styles.errorText}>
								{props.touched.title && props.errors.title}
							</Text>
							<TextInput
								multiline
								minHeight={60}
								placeholder='Review Body'
								style={styles.input}
								value={props.values.body}
								onChangeText={props.handleChange("body")}
							/>
							<Text style={styles.errorText}>
								{props.touched.body && props.errors.body}
							</Text>
							<TextInput
								placeholder='Rating'
								style={styles.input}
								keyboardType='numeric'
								value={props.values.rating}
								onChangeText={props.handleChange("rating")}
							/>
							<Text style={styles.errorText}>
								{props.touched.rating && props.errors.rating}
							</Text>
							<View style={styles.submitBtn}>
								<FlatButton
									title='Submit'
									onPress={props.handleSubmit}
								/>
							</View>
						</View>
					)}
				</Formik>
			</View>
		</TouchableWithoutFeedback>
	);
}
