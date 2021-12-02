import React, { Component } from "react";
import { Container, Content } from "native-base";
import { Alert, ActivityIndicator, Text, View, FlatList } from "react-native";

import getAPI from "../API/getAPI";

import NewsCard from "../components/Card";
import ModalComponent from "../components/Modal";
import { colors } from "../color/color";

export default class TabTwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			data: null,
			modalVisibility: false,
			articleData: {},
		};
	}

	componentDidMount() {
		getAPI("sports").then(
			(data) => {
				this.setState({
					isLoading: false,
					data: data,
				});
			},
			(error) => {
				Alert.alert("Error", "Error occured while fetching News.", [
					{
						text: "Okay",
					},
				]);
			}
		);
	}

	handleNewsDataOnPress = (articleData) => {
		this.setState({
			modalVisibility: true,
			articleData: articleData,
		});
	};
	handleModalClose = () => {
		this.setState({
			modalVisibility: false,
			articleData: {},
		});
	};

	render() {
		let view = this.state.isLoading ? (
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<View style={{ marginTop: 10 }}>
					<ActivityIndicator
						animating={this.state.isLoading}
						color={colors.grey}
					/>
					<Text style={{ marginTop: 10 }}>Loading</Text>
				</View>
			</View>
		) : (
			<FlatList
				data={this.state.data}
				renderItem={({ item }) => {
					return <NewsCard data={item} onPress={this.handleNewsDataOnPress} />;
				}}
			/>
		);

		return (
			<Container>
				<Content>{view}</Content>
				<ModalComponent
					showModal={this.state.modalVisibility}
					article={this.state.articleData}
					onCloseModal={this.handleModalClose}
				/>
			</Container>
		);
	}
}
