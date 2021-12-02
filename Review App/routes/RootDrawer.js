import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import HomeStack from "./HomeRoutes";
import AboutStack from "./AboutRoutes";

const screens = {
	Home: {
		screen: HomeStack,
	},
	About: {
		screen: AboutStack,
	},
};

const Drawer = createDrawerNavigator(screens);

export default createAppContainer(Drawer);
