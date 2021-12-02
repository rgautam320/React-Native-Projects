import React, { Component } from "react";
import { Container, Header, Tab, Tabs, Body, Title, ScrollableTab } from "native-base";
import Tab1 from "../tabs/tabOne";
import Tab2 from "../tabs/tabTwo";
import Tab3 from "../tabs/tabThree";
import Tab4 from "../tabs/tabFour";
import Tab5 from "../tabs/tabFive";
import Tab6 from "../tabs/tabSix";
import Tab7 from "../tabs/tabSeven";
import { colors } from "../color/color";
export default class TabsScrollableExample extends Component {
	render() {
		return (
			<Container>
				<Header hasTabs style={{}}>
					<Body style={{ flexDirection: "row", justifyContent: "center" }}>
						<Title>News App</Title>
					</Body>
				</Header>
				<Tabs
					renderTabBar={() => <ScrollableTab />}
					tabBarPosition='bottom'
					tabBarUnderlineStyle={{ backgroundColor: colors.white }}
				>
					<Tab
						heading='General'
						textStyle={{ color: colors.white }}
						activeTextStyle={{ fontWeight: "bold", color: colors.white }}
						activeTabStyle={{ backgroundColor: colors.heading }}
						tabStyle={{ backgroundColor: colors.heading }}
					>
						<Tab1 />
					</Tab>
					<Tab
						heading='Sports'
						textStyle={{ color: colors.white }}
						activeTextStyle={{ fontWeight: "bold", color: colors.white }}
						activeTabStyle={{ backgroundColor: colors.heading }}
						tabStyle={{ backgroundColor: colors.heading }}
					>
						<Tab2 />
					</Tab>
					<Tab
						heading='Technology'
						textStyle={{ color: colors.white }}
						activeTextStyle={{ fontWeight: "bold", color: colors.white }}
						activeTabStyle={{
							backgroundColor: colors.heading,
						}}
						tabStyle={{ backgroundColor: colors.heading }}
					>
						<Tab3 />
					</Tab>
					<Tab
						heading='Business'
						textStyle={{ color: colors.white }}
						activeTextStyle={{ fontWeight: "bold", color: colors.white }}
						activeTabStyle={{ backgroundColor: colors.heading }}
						tabStyle={{ backgroundColor: colors.heading }}
					>
						<Tab4 />
					</Tab>
					<Tab
						heading='Science'
						textStyle={{ color: colors.white }}
						activeTextStyle={{ fontWeight: "bold", color: colors.white }}
						activeTabStyle={{ backgroundColor: colors.heading }}
						tabStyle={{ backgroundColor: colors.heading }}
					>
						<Tab5 />
					</Tab>
					<Tab
						heading='Health'
						textStyle={{ color: colors.white }}
						activeTextStyle={{ fontWeight: "bold", color: colors.white }}
						activeTabStyle={{ backgroundColor: colors.heading }}
						tabStyle={{ backgroundColor: colors.heading }}
					>
						<Tab6 />
					</Tab>
					<Tab
						heading='Entertainment'
						textStyle={{ color: colors.white }}
						activeTextStyle={{ fontWeight: "bold", color: colors.white }}
						activeTabStyle={{ backgroundColor: colors.heading }}
						tabStyle={{ backgroundColor: colors.heading }}
					>
						<Tab7 />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}
