import React from "react";
import { View, Text, Image } from "react-native";
import Card from "../components/Card";
import { styles } from "../styles/style";
import { Rating } from "../images/Images";

const Review = ({ navigation, deleteItem }) => {
	const rating = navigation.getParam("rating");

	return (
		<>
			<View>
				<Card>
					<Text style={styles.reviewHeading}>
						{navigation.getParam("title")}
					</Text>
					<Text>{navigation.getParam("body")}</Text>
					<View style={styles.rating}>
						<Image
							resizeMode='contain'
							style={{ width: 100, height: 25 }}
							source={Rating.ratings[rating]}
						/>
					</View>
				</Card>
			</View>
		</>
	);
};

export default Review;
