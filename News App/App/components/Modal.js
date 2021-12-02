import React, { Component } from "react";
import { Modal, Dimensions, Share } from "react-native";
import { Container, Header, Left, Right, Button, Title, Icon, Body, Content } from "native-base";
import { WebView } from "react-native-webview";
import { colors } from "../color/color";
import Loading from "./Loading";

const webViewHeight = Dimensions.get("window").height - 56;

export default class ModalComponent extends Component {
	constructor(props) {
		super(props);
	}

	handleClose = () => {
		return this.props.onCloseModal();
	};

	handleShare = () => {
		const { url, title } = this.props.article;
		const message = `${title}\n\n Read More @${url}\n\nShared via Rajan News App`;
		return Share.share({ title, message, url: message }, { dialogTitle: `Share ${title}` });
	};

	render() {
		const { showModal, article } = this.props;
		const { url } = article;

		if (url != undefined) {
			return (
				<Modal
					animationType='slide'
					visible={showModal}
					transparent
					onRequestClose={this.handleClose}
				>
					<Container
						style={{
							margin: 5,
							marginBottom: 0,
							backgroundColor: colors.white,
							flex: 1,
						}}
					>
						<Header style={{ backgroundColor: colors.secondary }}>
							<Left>
								<Button onPress={this.handleClose} transparent>
									<Icon
										name='close'
										style={{
											color: colors.white,
											fontSize: 22,
										}}
									/>
								</Button>
							</Left>
							<Body>
								<Title
									children={article.title}
									style={{ color: colors.white }}
								/>
							</Body>
							<Right>
								<Button onPress={this.handleShare} transparent>
									<Icon
										name='share'
										style={{
											color: colors.white,
											fontSize: 22,
										}}
									/>
								</Button>
							</Right>
						</Header>
						<Content
							contentContainerStyle={{ height: webViewHeight, flex: 1 }}
						>
							<WebView
								source={{ uri: url }}
								style={{ flex: 1 }}
								startInLoadingState={true}
								renderLoading={() => <Loading />}
								scalesPageToFit
							/>
						</Content>
					</Container>
				</Modal>
			);
		} else {
			return null;
		}
	}
}
