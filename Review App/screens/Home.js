import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import { styles } from "../styles/style";
import Card from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import FormModal from "../screens/FormModal";

const Home = ({ navigation }) => {
	const [visibleModal, setVisibleModal] = useState(false);
	const [reviews, setReviews] = useState([
		{ title: "Zelda, Breath of Fresh Air", rating: 5, body: "lorem ipsum", key: "0" },
	]);

	const addReview = (review) => {
		review.key = Math.random().toString();
		setReviews((oldReview) => {
			return [review, ...oldReview];
		});
		setVisibleModal(false);
	};

	const deleteItem = (key) => {
		setReviews((oldReview) => {
			return oldReview.filter((val) => val.key != key);
		});
	};
	const [didMount, setDidMount] = useState(false);

	useEffect(() => {
		setDidMount(true);
		return () => setDidMount(false);
	}, []);

	if (!didMount) {
		return null;
	}
	return (
		<>
			<View style={styles.container}>
				<Modal
					visible={visibleModal}
					transparent={false}
					animationType='slide'
					statusBarTranslucent={false}
				>
					<View style={styles.modalView}>
						<View style={[styles.centerIcon, styles.closeIcon]}>
							<MaterialIcons
								name='close'
								size={36}
								onPress={() => setVisibleModal(false)}
							/>
						</View>
						<FormModal addReview={addReview} />
					</View>
				</Modal>
				<View style={styles.centerIcon}>
					<MaterialIcons
						name='add'
						size={36}
						onPress={() => setVisibleModal(true)}
					/>
				</View>
				<FlatList
					data={reviews}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate("Review", item)}
						>
							<Card>
								<View style={styles.itemFlex}>
									<Text style={styles.itemText}>
										{item.title}
									</Text>

									<MaterialIcons
										name='delete'
										style={styles.deleteIcon}
										size={36}
										onPress={() => deleteItem(item.key)}
									/>
								</View>
							</Card>
						</TouchableOpacity>
					)}
				/>
			</View>
		</>
	);
};

export default Home;
