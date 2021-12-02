import React, { Component } from "react";
import { Text } from "native-base";
import { TouchableOpacity, View, Image } from "react-native";
import { colors } from "../color/color";
import Time from "./Time";

export default class NewsCard extends Component {
	constructor(props) {
		super(props);
		this.data = props.data;
	}

	handlePress = () => {
		const { url, title } = this.data;
		return this.props.onPress({ url, title });
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					marginHorizontal: 4,
					marginVertical: 3,
					borderColor: colors.grey,
					borderWidth: 1,
					borderRadius: 6,
				}}
			>
				<View style={{ flex: 3, padding: 5, justifyContent: "center" }}>
					<Image
						style={{ height: 80, width: "100%" }}
						source={{
							uri: this.data.urlToImage
								? this.data.urlToImage
								: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png",
						}}
					/>
					<Text
						style={{
							flexWrap: "wrap",
							textAlign: "center",
							fontSize: 14,
							marginTop: 4,
						}}
					>
						{this.data.source.name ? this.data.source.name : "News Channel"}
					</Text>
				</View>

				<View style={{ flex: 7, paddingVertical: 2 }}>
					<Text
						numberOfLines={2}
						style={{ marginBottom: 4, textAlign: "justify" }}
					>
						{this.data.title
							? this.data.title.length < 48
								? this.data.title
								: `${this.data.title.substring(0, 48)}...`
							: "News Heading"}
					</Text>
					<Text note numberOfLines={4} style={{ textAlign: "justify" }}>
						{this.data.description ? this.data.description : "News Heading"}
					</Text>
					<Time date={this.data.publishedAt} />
				</View>

				<View style={{ flex: 2, justifyContent: "center" }}>
					<TouchableOpacity transparent onPress={this.handlePress}>
						<Text
							style={{
								color: "blue",
								textAlign: "right",
								paddingRight: 8,
							}}
						>
							View
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
