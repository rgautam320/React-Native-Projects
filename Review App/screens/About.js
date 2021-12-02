import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/style";

const About = () => {
	return (
		<>
			<View>
				<Text style={styles.aboutHeading}>Rajan Gautam</Text>
				<Text style={styles.aboutStyle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
					autem pariatur quaerat quas ea quisquam veritatis ipsa sunt aspernatur
					distinctio quidem dolorem, quod itaque! Sint eos blanditiis eveniet!
					Id accusantium doloribus natus dolorum sed magnam molestiae fugiat
					totam! Debitis esse maiores amet corporis facere repellendus natus
					dolor cum delectus enim!
				</Text>
			</View>
		</>
	);
};

export default About;
